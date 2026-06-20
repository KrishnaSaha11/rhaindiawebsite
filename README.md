# Ambika Biotech / RHA India — rhaindia.com

Production website for **Ambika Ricemill & Ambika Biotech** (brand: *RHA India*) —
a Rice Husk Ash (RHA) and rice husk products manufacturer & exporter from
Sambalpur, Odisha. Built with [Astro](https://astro.build) as a fast,
SEO-friendly static site. Primary goal: **B2B lead capture.**

## Tech

- **Astro 5** static site, zero client framework — minimal JS for speed.
- Lightweight scroll-reveal + a single hero animation only.
- Content is data-driven: products live in `src/data/products.ts`.

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs static site to /dist
npm run preview  # preview the production build
```

## Project structure

```
src/
  config/site.ts        # NAP, contact, lead-capture + analytics settings (EDIT HERE)
  data/products.ts      # the 6 products — add a product = add an entry
  layouts/BaseLayout.astro   # <head>, SEO, JSON-LD schema, GA4, fonts
  components/           # Header (mega-menu + drawer), Footer, FloatingCTA, QuoteForm, ...
  pages/               # one file per route
public/                # static assets, robots.txt, placeholder PDF/OG
```

## Configuration you must provide before go-live

Edit `src/config/site.ts` (or set the matching `PUBLIC_*` env vars):

| Setting | Where | Notes |
| --- | --- | --- |
| `web3formsKey` | `PUBLIC_WEB3FORMS_KEY` | Free key from [web3forms.com](https://web3forms.com); routes leads to the email + a Google Sheet. |
| `ga4Id` | `PUBLIC_GA4_ID` | GA4 Measurement ID (`G-XXXX`). Enables quote / WhatsApp / call conversion events. |
| `gscVerification` | `PUBLIC_GSC_VERIFICATION` | Google Search Console meta verification token. |

## Lead capture

The RFQ form (`src/components/QuoteForm.astro`) posts to **Web3Forms**, which emails
every submission to the configured address and can sync to a Google Sheet. It has a
honeypot field, an AJAX thank-you state, and fires GA4 `quote_submit` events.
Until a real Web3Forms key is set, the form still shows the confirmation (for previews).

## Build status

**Phase 1 complete:** project setup + full design system (header, footer, floating
CTAs, reusable quote form) + the **homepage**, responsive to the desktop and mobile
designs. Remaining phases: product pages → category pages → blog → about/CSR/contact
→ SEO/schema/redirects → analytics → deployment.
