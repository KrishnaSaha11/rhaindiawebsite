# 301 Redirect map (old WordPress → new site)

These preserve existing Google rankings by pointing old URLs at the
best-matching new page. They are implemented as **301** redirects in
`netlify.toml`. Note: `/rice-husk-ash-granules/`, `/rice-husk-pellets/`,
`/rice-husk-powder/` and `/blog/` keep the **same path** on the new site, so no
redirect is needed — they resolve directly.

| Old URL | New URL | Reason |
| --- | --- | --- |
| `/rice-husk-ash-powder/` | `/rice-husk-ash-ground-powder/` | Closest product (the RHA powder grade). Alternative target: `/rice-husk-ash/` category. |
| `/about-us/` | `/about/` | Anchor → indexable page |
| `/contact-us/` | `/contact/` | Anchor → indexable page |
| `/csr-sustainability/` | `/csr/` | Anchor → indexable page |
| `/rice-husk-product/` | `/rice-husk-raw/` | Raw whole-husk product |
| `/our-products/` | `/products/` | Products overview |

## How to confirm / extend

1. Export the old site's URL list from Google Search Console (Pages report) or
   a crawl (Screaming Frog).
2. For any old URL not covered above, add a `[[redirects]]` block in
   `netlify.toml` pointing to the closest new page (avoid redirect chains).
3. After go-live, watch Search Console **Coverage** for 404s and add redirects
   as needed.

## ⚠️ Decision needed

The brief used `/rice-husk/` for **both** the Category B landing page and the
raw-husk product. We resolved this as:

- `/rice-husk/` → **Category B landing page**
- `/rice-husk-raw/` → **raw whole-husk product page**

If you'd prefer the raw product to own `/rice-husk/` instead, tell us and we'll
swap the slugs and update the redirect map.
