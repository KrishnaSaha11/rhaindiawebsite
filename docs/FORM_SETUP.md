# Lead form setup — Web3Forms + Google Sheets

The RFQ / quote form (`src/components/QuoteForm.astro`) is already wired to
**Web3Forms**. You just need a free access key. Once set, every submission is
emailed to **manigupta6777@gmail.com** and (optionally) appended to a **Google
Sheet**. The form already includes honeypot spam protection, an AJAX
thank-you, and GA4 `quote_submit` conversion events.

> Until a real key is set, the form shows the thank-you message but does **not**
> send anything. This is intentional so previews work.

---

## Part A — Get the Web3Forms key (email delivery) · ~2 min

1. Go to https://web3forms.com.
2. Enter **manigupta6777@gmail.com** in the "Create Access Key" box and submit.
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

### Option 2 — Google Apps Script endpoint (full control, free)
Use this if you'd rather post directly to your own Google endpoint.

1. In the Google Sheet → **Extensions → Apps Script**, paste:

   ```js
   function doPost(e) {
     var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
     var d = e.parameter;
     sheet.appendRow([
       new Date(), d.name, d.company, d.country, d.email,
       d.phone, d.product, d.quantity, d.message, d.source
     ]);
     return ContentService
       .createTextOutput(JSON.stringify({ success: true }))
       .setMimeType(ContentService.MimeType.JSON);
   }
   ```
2. **Deploy → New deployment → Web app**, execute as **Me**, access
   **Anyone**, and copy the `/exec` URL.
3. Add a header row to the Sheet: `Timestamp | Name | Company | Country | Email
   | Phone | Product | Quantity | Message | Source`.
4. Tell us the `/exec` URL and we'll add a second, parallel POST in
   `QuoteForm.astro` so each lead goes to **both** the inbox (Web3Forms) and the
   Sheet (Apps Script). *(Small code change — ping us and we'll wire it.)*

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
