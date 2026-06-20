# Image map — where each photo goes & how to swap it

All site images are self-hosted under **`/public/images/`** and rendered through
`src/components/Photo.astro` (lazy-loaded, sized to avoid layout shift, with
keyword-rich ALT text). Right now each slot holds an **on-brand SVG placeholder**
(labelled "PLACEHOLDER — replace with real photo"), because this build
environment blocks downloads from stock-photo sites.

## How to swap in real photos
1. Get a royalty-free photo (Pexels / Unsplash — free for commercial use) that
   matches the subject in the table below.
2. Save it with the **exact same filename** shown (you can replace `.svg` with a
   real `.jpg`/`.webp` — if you do, update the extension where the file is
   referenced, or just keep the `.svg` name pointing at a real image and tell us
   and we'll switch the references + run them through `sharp` for WebP).
3. Recommended sizes: products/sections **1200×900**, hero **1200×1320**,
   blog **1200×800**. Keep them < 200 KB where possible.
4. Commit & redeploy. (Or send us the files / direct URLs and we'll wire +
   optimize them.)

## Product photos — `public/images/products/`
| File | Used on | Suggested real photo · search terms |
| --- | --- | --- |
| `rice-husk-ash-ground-powder.svg` | Ground Powder product + card | Fine grey micronized ash / silica powder close-up · "rice husk ash powder", "silica fume grey powder" |
| `rice-husk-ash-granules.svg` | Granules product + card | Grey/black granular ash; steel ladle covering · "rice husk ash granules", "tundish covering compound" |
| `rice-husk-ash-pellets.svg` | Pellets product + card | Uniform grey ash pellets in hand/bag · "ash pellets", "insulation pellets grey" |
| `rice-husk-raw.svg` | Raw Husk product + card | Golden-brown loose rice husk pile · "rice husk", "paddy husk" |
| `rice-husk-powder.svg` | Husk Powder product + card | Light tan ground husk powder · "rice husk powder", "rice bran powder tan" |
| `rice-husk-pellets.svg` | Biomass Pellets product + card | Brown biomass fuel pellets · "biomass pellets", "wood/husk fuel pellets" |

## Section photos — `public/images/sections/`
| File | Used on | Suggested real photo · search terms |
| --- | --- | --- |
| `rice-mill-plant.svg` | Homepage About, About page | Rice mill / processing plant exterior · "rice mill factory", "industrial plant" |
| `rice-fields-packing.svg` | Homepage CSR, CSR page | Green paddy fields / sacks · "rice paddy field", "grain sacks warehouse" |
| `packing-jumbo-bags.svg` | Product page thumbnail | Jumbo / FIBC bulk bags · "jumbo bags FIBC", "bulk bags warehouse" |
| `loading-export.svg` | Product page thumbnail | Container loading / export · "container loading export", "cargo containers port" |
| `rha-detail.svg` | Product page thumbnail | Material close-up in hand · "powder in hand", "granules macro" |

## Homepage hero carousel (full-bleed, rotating)
The homepage hero rotates **4 slides**. Slide 1 is the LCP image (loads eagerly);
the rest lazy-load. Swap these files for impactful, landscape (≈1920×1080) photos:

| Slide | File | Message | Suggested real photo |
| --- | --- | --- | --- |
| 1 (LCP) | `hero/rice-husk-ash-hero.svg` | Manufacturer & Exporter | Striking RHA powder/granules close-up or plant hero |
| 2 | `sections/rha-detail.svg` | Quality & Consistency (NABL, 85–92% SiO₂) | Material macro / lab testing |
| 3 | `sections/rice-fields-packing.svg` | Sustainability | Green paddy fields / packing |
| 4 | `sections/loading-export.svg` | Export-ready | Container loading / port |

> To add/remove slides or change the copy, edit the `slides` array in
> `src/components/HeroCarousel.astro`.

## Blog — `public/images/blog/`
| File | Used on | Suggested real photo |
| --- | --- | --- |
| `featured-rha.svg` | Featured post ("What is RHA") | RHA powder / production line |
| `guides.svg` | Guides-category posts | Lab testing / documents |
| `industry.svg` | Industry-category posts | Steel mill / concrete pour |
| `comparisons.svg` | Comparisons-category posts | Fuel / coal vs pellets |
| `sustainability.svg` | Sustainability-category posts | Rice fields / green |

> Per-post override: a blog post can set `image: "/images/blog/your-file.svg"`
> and `imageAlt: "..."` in its front-matter to use a custom photo.
