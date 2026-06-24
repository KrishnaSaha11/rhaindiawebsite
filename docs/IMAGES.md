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

## Homepage hero carousel (full-bleed, rotating) — REAL PHOTOS IN PLACE
The hero rotates **4 real photos** (client-supplied, optimized to WebP). Slide 1
is the LCP image (eager); the rest lazy-load. All use `object-fit: cover`
(center focal point) so they fill the hero on any screen with no distortion.

| Slide | File | Photo | Message |
| --- | --- | --- | --- |
| 1 (LCP) | `hero/hero-1.webp` | Raw rice husk close-up | Manufacturer & Exporter |
| 2 | `hero/hero-2.webp` | Lab testing | Quality & Consistency (NABL, 85–92% SiO₂) |
| 3 | `hero/hero-3.webp` | Farmer harvesting paddy | Sustainability |
| 4 | `hero/hero-4.webp` | Container ship at port | Export-ready |

> To swap any of these, drop a new image at the same path (re-export to WebP,
> ≤ ~260 KB for slide 1). To add/remove slides or change copy, edit the `slides`
> array in `src/components/HeroCarousel.astro`.

## Logo — REAL LOGO IN PLACE
- `images/logo.webp` — full Ambika lockup (trimmed), available for any large use.
- `images/logo-mark.webp` — the wheat **emblem** cropped from the logo; used as
  the brand mark in the **header** and **footer** (white rounded tile + wordmark).
  Replace either file in place to update the logo everywhere.

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
