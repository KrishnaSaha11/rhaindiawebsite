# Lead form setup — Web3Forms + Google Sheets

The RFQ / quote form (`src/components/QuoteForm.astro`) is already wired to
**Web3Forms**. You just need a free access key. Once set, every submission is
emailed to **sales@rhaindia.com** and (optionally) appended to a **Google
Sheet**. The form already includes honeypot spam protection, an AJAX
thank-you, and GA4 `quote_submit` conversion events.

> Until a real key is set, the form shows the thank-you message but does **not**
> send anything. This is intentional so previews work.

---

## Part A — Get the Web3Forms key (email delivery) · ~2 min

1. Go to https://web3forms.com.
2. Enter **sales@rhaindia.com** in the "Create Access Key" box and submit.
3. Check that inbox for the **Access Key** (a UUID like
   `abcd1234-5e6f-7890-abcd-1234567890ef`) and verify the email.
4. Add the key to the site — pick **one** option:
   - **Recommended (Netlify):** Netlify → Site configuration → **Environment
     variables** → add `PUBLIC_WEB3FORMS_KEY` = your key → **Redeploy**.
   - **Or in code:** edit `src/config/site.ts`, replace
     `REPLACE_WITH_WEB3FORMS_ACCESS_KEY` with your key, commit & push.

That's it for email. Submit a test from `/contact/` and confirm it arrives.

### Optional hardening (Web3Forms dashboard)
- Set **Allowed Domains** to `rhaindia.com` so the key can't be abused elsewhere.
- The form already sends a hidden `subject`, `from_name` and `source` (which
  page the lead came from) — these show up in the email.
- Web3Forms also offers built-in reCAPTCHA/hCaptcha if you ever want more than
  the honeypot.

---

## Part B — Also store every lead in a Google Sheet

You have two ways. **Option 1 is the simplest.**

### Option 1 — Web3Forms → Google Sheets (no code)
1. Create a new Google Sheet (e.g. "RHA India — Website Leads").
2. In the Web3Forms dashboard, open your access key → **Integrations** →
   **Google Sheets** → connect your Google account and select that Sheet.
   (Web3Forms also supports Zapier/Make if you prefer those.)
3. Submit a test lead → confirm a new row appears with name, company, country,
   email, phone, product, quantity, message, and `source`.

### Option 2 — Google Apps Script endpoint (✅ already wired in the code)

The form **already** posts each lead to a Google Apps Script web app in parallel
with the email. You just create the Sheet + script and paste the URL into one
environment variable. **Do all of these on the Google side:**

**1. Create the Sheet**
- Go to https://sheets.google.com → **Blank spreadsheet** → name it
  e.g. *"RHA India — Website Leads"*.
- In row 1, add these exact headers (left to right):

  `Timestamp | Name | Company | Country | Email | Phone | Product | Quantity | Message | Source`

**2. Add the Apps Script**
- In the Sheet: **Extensions → Apps Script**. Delete any sample code and paste:

  ```js
  function doPost(e) {
    var lock = LockService.getScriptLock();
    lock.tryLock(30000);
    try {
      var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1')
        || SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
      var d = (e && e.parameter) ? e.parameter : {};
      sheet.appendRow([
        new Date(),
        d.name || '', d.company || '', d.country || '', d.email || '',
        d.phone || '', d.product || '', d.quantity || '', d.message || '',
        d.source || ''
      ]);
      return ContentService
        .createTextOutput(JSON.stringify({ success: true }))
        .setMimeType(ContentService.MimeType.JSON);
    } finally {
      lock.releaseLock();
    }
  }
  ```
- Click the **Save** icon.

**3. Deploy it as a Web app**
- Top-right **Deploy → New deployment**.
- Click the gear → choose **Web app**.
- **Description:** anything · **Execute as:** **Me** · **Who has access:**
  **Anyone**.
- **Deploy** → authorise the script when prompted (it's your own account; click
  through the "unverified app → Advanced → Go to project" screens).
- Copy the **Web app URL** — it ends in **`/exec`**, e.g.
  `https://script.google.com/macros/s/AKfy.../exec`.

**4. Put the URL into the site**
- Netlify → Site configuration → **Environment variables** → add:
  - **Key:** `PUBLIC_SHEETS_ENDPOINT`
  - **Value:** the `/exec` URL
- **Redeploy** the site (env vars are read at build time).
  - *(Local/dev alternative: add `PUBLIC_SHEETS_ENDPOINT=...` to a `.env` file,
    or set `sheetsEndpoint` directly in `src/config/site.ts`.)*

**5. Test**
- Submit a quote from `/contact/`. You should get the email (Web3Forms) **and**
  a new row in the Sheet, and still see the on-page thank-you message.

> Notes: the browser posts to Apps Script in `no-cors` mode (fire-and-forget),
> so the row is written even though the page can't read the response — that's
> expected and does not affect the email or the thank-you. If you only set up
> the Sheet (no Web3Forms key), leads still land in the Sheet and the thank-you
> still shows. To change which tab is written, rename the target sheet to
> `Sheet1` or adjust `getSheetByName` in the script.

---

## Field reference (what each lead contains)

`name`, `company`, `country`, `email`, `phone`, `quantity`, `product`,
`message`, plus hidden `source` (origin page) and `subject`. The honeypot field
is `botcheck` — leave it hidden; real users never fill it.

## Troubleshooting
- **Nothing arrives:** the key is still the placeholder, or the env var wasn't
  set before the last deploy → set `PUBLIC_WEB3FORMS_KEY` and redeploy.
- **Works locally but not live:** env var added to Netlify but site not
  redeployed → trigger a redeploy.
- **Spam:** enable Allowed Domains + a Web3Forms captcha.
