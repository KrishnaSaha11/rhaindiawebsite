# SEO optimization — what was done, per page

Every page has a **unique title + meta description**, one **H1**, logical
H2/H3, canonical, OG/Twitter, and schema. The target keyword appears in the
title, H1, first paragraph, at least one heading, body, image ALT and the URL
slug — without stuffing. Descriptive internal links connect
**product → category → related product → contact**.

> Note: a dedicated keyword map wasn't received, so targeting uses the per-page
> **focus keywords from the brief**. Send the map if you'd like further tuning.

## Primary keyword targeting (page ↔ commercial keyword)
| Page | URL | Primary keyword |
| --- | --- | --- |
| Homepage | `/` | rice husk ash manufacturer / exporter (India) |
| Category A | `/rice-husk-ash/` | rice husk ash |
| Category B | `/rice-husk/` | rice husk (supplier/exporter) |
| Ground Powder | `/rice-husk-ash-ground-powder/` | rice husk ash ground powder / micronized RHA |
| Granules | `/rice-husk-ash-granules/` | rice husk ash granules |
| Pellets | `/rice-husk-ash-pellets/` | rice husk ash pellets |
| Raw Husk | `/rice-husk-raw/` | rice husk (raw whole husk) |
| Husk Powder | `/rice-husk-powder/` | rice husk powder |
| Biomass Pellets | `/rice-husk-pellets/` | rice husk pellets / biomass pellets |

## Changes by page

### Homepage (`/`)
- Title/description target "Rice Husk Ash Manufacturer & Exporter India".
- First paragraph reworded to lead with **"Rice Husk Ash (RHA)"** (was "RHA").
- Added descriptive internal links in the About blurb: **"Rice Husk Ash" →
  `/rice-husk-ash/`** and **"rice husk products" → `/rice-husk/`**.
- Category headings now link to the two category landing pages.
- All section/product images now have keyword-rich ALT (e.g. "High-silica Rice
  Husk Ash powder and granules close-up — Ambika Biotech").
- WebSite + Organization/LocalBusiness JSON-LD.

### Product pages (all 6, `[slug]`)
- Title, meta description, focus keyword and slug taken from the brief
  (commercial-intent, ~60-char titles with brand).
- H1 = product name; first overview paragraph and an H2 ("What is …", "Where … is
  used") include the keyword.
- **New internal-links paragraph** after the overview: "Browse the full
  *{Category} range*, compare it with *{related product}*, or *request a bulk
  {product} quote*" — product → category → related → contact, descriptive anchors.
- Hero/card/thumbnail images use the brief's ALT text.
- Product + BreadcrumbList + **FAQPage** JSON-LD.

### Category pages (`/rice-husk-ash/`, `/rice-husk/`)
- Unique commercial titles + descriptions; H1 = category; intro first paragraph
  includes the keyword.
- **New internal-links paragraph** cross-linking the *other* category and the
  contact form (keyword silo + product → contact).
- ItemList + BreadcrumbList JSON-LD.

### Products overview (`/products/`)
- Unique title/description; category headings link to category landings.

### Blog (`/blog/` + posts)
- Listing + each post unique title/description; posts use SEO titles.
- Each post now has a category-matched image with descriptive ALT.
- BlogPosting + BreadcrumbList JSON-LD; inline CTA links to the quote form.

### About / CSR / Contact
- Unique titles/descriptions; H1 per page; real NAP everywhere.
- Images have descriptive ALT; About/CSR link to products & contact;
  ContactPage / Breadcrumb schema.

## Sitewide
- `sitemap-index.xml` + `robots.txt`; 404 set to `noindex`.
- 301 redirects from old WordPress URLs (`netlify.toml`).
- All in-content paragraph links styled (green, underlined) so internal links
  are visible and crawlable.

## Still worth doing (needs your input / real data)
- Provide the keyword map for finer targeting / any secondary keywords.
- Replace placeholder images with real photos (filenames in `docs/IMAGES.md`)
  — real images with the keyword ALT add further relevance.
- After go-live: submit sitemap in Search Console, then monitor query data and
  iterate on titles/descriptions by CTR.
