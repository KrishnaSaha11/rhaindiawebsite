# Deployment guide — rhaindia.com

Static Astro site. Build command `npm run build`, publish directory `dist`
(already set in `netlify.toml`). This guide deploys to a **temporary Netlify
URL first** for review, then points `rhaindia.com` at it **without touching
your email (MX) records**.

---

## Step 0 — Before go-live, set real values

In `src/config/site.ts` (or as Netlify environment variables):

- `PUBLIC_WEB3FORMS_KEY` — free key from https://web3forms.com (routes leads to
  sales@rhaindia.com + a Google Sheet)
- `PUBLIC_GA4_ID` — GA4 Measurement ID (`G-XXXXXXX`)
- `PUBLIC_GSC_VERIFICATION` — Search Console meta token

Also replace `public/test-report-sample.pdf` with the real NABL report and drop
in real photos.

---

## Step 1 — Deploy to a TEMPORARY Netlify URL (for review)

1. Go to https://app.netlify.com → **Add new site → Import an existing project**.
2. Choose **GitHub**, authorise, select **`KrishnaSaha11/rhaindiawebsite`**.
3. **Branch to deploy:** `claude/vibrant-cannon-rxqtcv` (deploy from the branch
   first so you can review before merging).
4. Build settings (auto-detected from `netlify.toml`):
   - Build command: `npm run build`
   - Publish directory: `dist`
5. (Optional) **Site configuration → Environment variables** → add the
   `PUBLIC_*` values from Step 0. You can also do this later and redeploy.
6. Click **Deploy**. In ~1 minute you get a URL like
   `https://random-name-123.netlify.app`.
7. **Rename it:** Site configuration → **Change site name** → e.g.
   `rha-india-preview` → preview at `https://rha-india-preview.netlify.app`.

Review the whole site on that URL on desktop and mobile. Netlify keeps a
deploy history, so you can roll back any deploy with one click.

> Tip: branch deploys are tagged `noindex` by Netlify, so the temporary URL
> won't get indexed by Google while you review.

---

## Step 2 — Merge to main (recommended before going live)

Once the preview looks good, merge `claude/vibrant-cannon-rxqtcv` → `main`,
then set Netlify's **Production branch** to `main`
(Site configuration → Build & deploy → Branches). This way production tracks
`main` and future edits to `main` auto-deploy.

---

## Step 3 — Point rhaindia.com at Netlify (WITHOUT touching email)

**Do NOT switch your domain to Netlify DNS / Netlify nameservers.** Keep your
current DNS provider (where your MX records live) and only add/change the two
website records below. Your MX (email) records stay exactly as they are.

1. In Netlify: **Domain management → Add a domain** → enter `rhaindia.com` →
   choose **“Set up DNS externally”** (i.e. keep your registrar's DNS).
2. At your current DNS host (GoDaddy / Hostinger / Cloudflare / etc.), edit
   **only** these records:

   | Type | Name / Host | Value | Notes |
   |------|-------------|-------|-------|
   | A | `@` (apex / root) | `75.2.60.5` | Netlify's load balancer |
   | CNAME | `www` | `<your-site>.netlify.app` | e.g. `rha-india-preview.netlify.app` |

   - If your DNS host supports **ALIAS / ANAME / CNAME-flattening** for the
     apex, you may instead point `@` to `<your-site>.netlify.app` (preferred).
   - **Leave every `MX` record untouched.** Also leave `TXT` (SPF/DKIM/DMARC)
     and any mail-related `CNAME` (e.g. `mail`, `autodiscover`) as-is.
3. Back in Netlify, set the **primary domain** (e.g. `rhaindia.com` with `www`
   redirecting to it, or vice-versa) and click **Verify / Provision certificate**.
   Netlify issues a free Let's Encrypt **HTTPS** certificate automatically
   (can take a few minutes to an hour).

**Lower the TTL first (optional but smart):** a day before the switch, set the
A/CNAME records' TTL to 300 seconds so changes propagate fast and rollback is
quick.

---

## Step 4 — Keep the old WordPress site as a backup

- **Don't cancel** the old WordPress hosting yet. Pointing DNS to Netlify just
  stops traffic going there; the install stays intact on its host.
- Keep it reachable for yourself during the transition by adding a record like
  `old.rhaindia.com` → (old host's IP or hostname). This does not affect the
  live site or email.
- To **roll back** instantly: revert the A record (`@`) back to the old host's
  IP and the `www` CNAME to its old value. Because TTL is low, it propagates in
  minutes.
- Only after the new site is confirmed live, indexed and capturing leads for a
  week or two should you decommission WordPress.

---

## Step 5 — Post go-live checklist

- [ ] Submit `https://rhaindia.com/sitemap-index.xml` in Google Search Console.
- [ ] Verify the GA4 real-time report shows visits; test a quote submission,
      WhatsApp click and call click fire conversion events.
- [ ] Run PageSpeed Insights (mobile + desktop) and confirm green Core Web Vitals.
- [ ] Spot-check the 301 redirects (e.g. `/rice-husk-ash-powder/`,
      `/about-us/`) return 301 to the new pages.
- [ ] Confirm a real lead arrives at sales@rhaindia.com and in the Sheet.
