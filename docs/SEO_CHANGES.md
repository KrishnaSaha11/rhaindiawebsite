# SEO optimization — what was done, per page

Every page has a **unique title + meta description**, one **H1**, logical
H2/H3, canonical, OG/Twitter, and schema. The target keyword appears in the
title, H1, first paragraph, at least one heading, body, image ALT and the URL
slug — without stuffing. Descriptive internal links connect
**product → category → related product → contact**.

Targeting now follows the supplied **keyword map** (P1 = highest lead intent,
P2 = next, P3 = informational/blog).

## Final keyword → page map
| Keyword | Type | Priority | Target page |
| --- | --- | --- | --- |
| rice husk ash manufacturer | Commercial | P1 | `/` (title, H1) |
| rice husk ash supplier / exporter India | Commercial | P1 | `/` (title, description, body) |
| rice husk ash supplier Odisha | Local | P1 | `/` + `/contact/` (description, intro, About blurb) |
| buy rice husk ash / rice husk ash price | Transactional | P1 | All product pages (CTA "request a bulk … price quote") + blog |
| tundish covering compound manufacturer | Commercial | P1 | `/rice-husk-ash-granules/` + `/rice-husk-ash-pellets/` (title, desc, overview) |
| ladle covering compound supplier | Commercial | P1 | `/rice-husk-ash-granules/` + `/rice-husk-ash-pellets/` (title, desc, overview) |
| rice husk ash for steel | Commercial | P2 | `/rice-husk-ash/` (intro) |
| micronized rice husk ash supplier | Commercial | P1 | `/rice-husk-ash-ground-powder/` (desc, overview) |
| rice husk ash for concrete / pozzolana supplier | Commercial | P1 | `/rice-husk-ash-ground-powder/` (focus kw, desc, overview) |
| SCM supplier India | Commercial | P2 | `/rice-husk-ash-ground-powder/` (overview) |
| rice husk pellets supplier | Commercial | P1 | `/rice-husk-pellets/` (title/desc) |
| biomass pellets manufacturer India | Commercial | P1 | `/rice-husk-pellets/` (desc, value) |
| rice husk pellets price | Transactional | P1 | `/rice-husk-pellets/` (desc "price on request") |
| biomass fuel pellets exporter | Commercial | P2 | `/rice-husk-pellets/` (body/title) |
| rice husk powder supplier | Commercial | P2 | `/rice-husk-powder/` (title/desc) |
| rice husk for poultry / cattle feed | Commercial | P2 | `/rice-husk-powder/` (focus kw, desc, applications) |
| what is rice husk ash / RHA uses | Informational | P3 | `/blog/what-is-rice-husk-ash/` |
| rice husk ash silica content / specifications | Informational | P3 | `/blog/inside-nabl-testing-tds/` |
| rice husk ash in concrete benefits | Informational | P2 | `/blog/rha-in-concrete-dosage-gains/` + `/rice-husk-ash-ground-powder/` |
| rice husk pellets calorific value / biomass vs coal | Informational | P2 | `/blog/rice-husk-pellets-vs-coal/` |
| rice husk ash granules | Commercial | — | `/rice-husk-ash-granules/` (H1) |
| rice husk (raw whole husk) | Commercial | — | `/rice-husk-raw/` (H1) |
| rice husk (supplier/exporter) | Commercial | — | `/rice-husk/` category |

### Keyword-map edits applied (this pass)
- **Homepage:** description now "rice husk ash manufacturer, supplier & exporter
  in Sambalpur, Odisha … bulk quote/price"; About blurb adds "Rice Husk Ash
  supplier in Odisha".
- **Contact:** description + intro add "Rice Husk Ash supplier in Odisha" and
  "quote/price".
- **RHA Granules:** retitled to target **tundish & ladle covering compound
  supplier**; description + overview reworded with both covering-compound phrases.
- **RHA Pellets:** description/value now target **ladle & tundish covering
  compound** (in addition to insulation).
- **Ground Powder:** focus keywords + description + overview target **micronized
  rice husk ash supplier**, **rice husk ash for concrete / pozzolana supplier**,
  **SCM supplier India**.
- **Rice Husk Pellets:** description/value target **rice husk pellets supplier**,
  **biomass pellets manufacturer India**, **rice husk pellets price** (on request).
- **Rice Husk Powder:** targets **rice husk powder supplier** and **rice husk for
  poultry / cattle feed**.
- **/rice-husk-ash/ category:** intro adds **"Rice Husk Ash for steel"**.
- **All product pages:** transactional intent via "request a bulk … **price**
  quote" internal link.

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
