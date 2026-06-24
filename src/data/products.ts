// ============================================================================
//  Product catalogue — single source of truth for the 6 products.
//  Content combines the approved design copy with the Website Development
//  Brief (Part B). All specification values are INDICATIVE / DRAFT and must
//  be replaced with confirmed NABL lab figures before go-live.
//  Add a new product = add one entry here.
// ============================================================================

export type Category = 'rice-husk-ash' | 'rice-husk';

export interface Spec {
  k: string;
  v: string;
}
export interface Application {
  title: string;
  note: string;
  shape: 'circle' | 'diamond' | 'square' | 'ring' | 'triangle';
  color: string;
}

export interface Product {
  slug: string;
  name: string;
  shortName: string;
  category: Category;
  categoryLabel: string;
  code: string; // small mono label, e.g. "MICRONIZED POWDER"
  tag: string; // card tag
  use: string; // short card / dropdown description
  photoLabel: string; // placeholder image caption
  heroAlt: string; // descriptive ALT for the hero image

  // SEO
  seoTitle: string;
  metaDescription: string;
  focusKeyword: string;

  // Hero
  value: string; // hero sub-paragraph
  tags: string[];
  statBig: string;
  statLabel: string;

  // Body
  overviewHeading: string;
  overview: string[];
  specs: Spec[];
  benefits: string[];
  applications: Application[];
  packing: string;

  related: string[]; // slugs
  /** Optional real product photos (gallery). First = hero/card image. */
  images?: { src: string; alt: string }[];
}

const A = '#27593C';
const G = '#C79A3E';

export const products: Product[] = [
  // ===================== CATEGORY A — RICE HUSK ASH =====================
  {
    slug: 'rice-husk-ash-ground-powder',
    name: 'Rice Husk Ash Ground Powder (Micronized)',
    shortName: 'Grounded Rice Husk Ash',
    category: 'rice-husk-ash',
    categoryLabel: 'Rice Husk Ash',
    code: 'MICRONIZED RHA',
    tag: 'MICRONIZED POWDER',
    use: 'High-silica pozzolana / SCM for concrete, cement and refractory applications.',
    photoLabel: 'PHOTO: micronized RHA powder',
    heroAlt:
      'Micronized Rice Husk Ash Ground Powder pozzolanic SCM for concrete and cement 85-92 percent SiO2 - Ambika Biotech',
    seoTitle:
      'Rice Husk Ash Ground Powder (Micronized RHA) Manufacturer India | Ambika Biotech',
    metaDescription:
      'Micronized Rice Husk Ash Ground Powder supplier — reactive pozzolana / pozzolanic SCM for concrete, cement & refractory. 85-92% SiO2. Bulk supply & export from Odisha, India.',
    focusKeyword: 'micronized rice husk ash supplier, rice husk ash for concrete, pozzolana / SCM supplier India',
    value:
      'Amorphous, micronized high-silica RHA — a reactive pozzolanic supplementary cementitious material (SCM) for concrete, cement and refractory, delivered to a consistent, NABL-tested spec.',
    tags: ['85–92% Silica', 'Micronized', 'Pozzolanic SCM'],
    statBig: '85–92%',
    statLabel: 'SiO₂ SILICA',
    overviewHeading: 'What is Rice Husk Ash Ground Powder?',
    overview: [
      'Rice Husk Ash Ground Powder is amorphous, high-silica ash milled to a very fine particle size, giving it a large specific surface area and strong pozzolanic reactivity. It is used as a Supplementary Cementitious Material (SCM): it reacts with free lime in cement to form additional C-S-H gel, which increases compressive strength, lowers permeability, and improves the durability and sulphate / chloride resistance of concrete.',
      'Beyond concrete, the micronized powder serves as a silica source for refractories, a reinforcing and extending filler for rubber and polymers, and a raw material in ceramics. As a partial cement replacement it reduces both cost and the carbon footprint of concrete.',
      'As a micronized rice husk ash supplier and pozzolana / SCM supplier in India, we deliver every batch to a consistent, independently NABL-tested spec with reliable bulk supply and full export documentation. Note: this is a finer, construction-grade product, distinct from the coarser steel-grade ash.',
    ],
    specs: [
      { k: 'SiO₂', v: '85 – 92%' },
      { k: 'Fineness (passing 45 micron)', v: '90% minimum' },
      { k: 'Pozzolanic Activity Index (7-day)', v: '105 or higher' },
      { k: 'LOI', v: '4% maximum' },
      { k: 'Moisture', v: '1 – 2% maximum' },
      { k: 'Specific Surface Area', v: '15 m²/g or higher (typical)' },
      { k: 'pH Value', v: '7 – 9' },
      { k: 'Colour', v: 'Grey' },
    ],
    benefits: [
      'High pozzolanic reactivity from amorphous silica',
      'Boosts concrete compressive strength and durability',
      'Reduces cement consumption and overall cost',
      'Lowers permeability; better sulphate / chloride resistance',
      'Eco-friendly partial cement replacement (lower carbon)',
      'Consistent fineness and quality, batch after batch',
    ],
    applications: [
      { title: 'High-performance concrete', note: 'Pozzolanic SCM for high-strength, durable, lower-carbon concrete.', shape: 'square', color: A },
      { title: 'Cement blending', note: 'Partial clinker replacement in blended cements.', shape: 'diamond', color: G },
      { title: 'Precast units', note: 'Improved finish, strength and durability for precast.', shape: 'circle', color: A },
      { title: 'Refractories', note: 'High-purity amorphous silica source for castables and linings.', shape: 'triangle', color: G },
      { title: 'Rubber & polymers', note: 'Reinforcing and extending filler.', shape: 'ring', color: A },
      { title: 'Ceramics', note: 'Silica raw material for technical bodies.', shape: 'square', color: G },
    ],
    packing: 'Available in 5 kg, 10 kg, 20 kg, 25 kg and jumbo bags.',
    related: ['rice-husk-ash-granules', 'rice-husk-ash-pellets', 'rice-husk-powder'],
    images: [
      { src: '/images/products/rice-husk-ash-ground-powder.webp', alt: 'Micronized Rice Husk Ash ground powder sample — high-silica grey RHA by Ambika Biotech' },
      { src: '/images/products/rice-husk-ash-ground-powder-2.webp', alt: 'Rice Husk Ash pellets sample — grey high-silica RHA by Ambika Biotech' },
      { src: '/images/products/rice-husk-ash-ground-powder-3.webp', alt: 'Rice Husk Ash granules sample — dark high-silica RHA by Ambika Biotech' },
    ],
  },
  {
    slug: 'rice-husk-ash-granules',
    name: 'Rice Husk Ash Granules',
    shortName: 'Rice Husk Ash Granules',
    category: 'rice-husk-ash',
    categoryLabel: 'Rice Husk Ash',
    code: 'RHA GRANULES',
    tag: 'STEEL INDUSTRY',
    use: 'Insulating tundish & ladle covering compound for the steel industry.',
    photoLabel: 'PHOTO: RHA granules',
    heroAlt:
      'Rice Husk Ash Granules free-flowing insulating tundish and ladle covering compound for steel - Ambika Biotech',
    seoTitle:
      'Tundish & Ladle Covering Compound Supplier | RHA Granules India',
    metaDescription:
      'Rice Husk Ash Granules — a free-flowing tundish & ladle covering compound for steel mills. Insulating, high-silica, low thermal conductivity. Covering compound manufacturer & exporter from Odisha, India.',
    focusKeyword: 'rice husk ash granules, tundish covering compound, ladle covering compound',
    value:
      'Free-flowing, high-silica RHA granules engineered as an insulating tundish covering compound and ladle covering compound for the steel industry — supplied to a consistent, NABL-tested spec.',
    tags: ['High Silica', 'Free-Flowing', 'Insulating'],
    statBig: '80–90%',
    statLabel: 'SiO₂ SILICA',
    overviewHeading: 'What are Rice Husk Ash Granules?',
    overview: [
      'Rice Husk Ash Granules are a granulated, high-silica form of RHA with controlled granulometry and excellent flow, formulated for use as a covering compound on molten metal.',
      'Spread over the steel surface in the tundish or ladle, they form an insulating, non-wetting layer that reduces heat loss, prevents re-oxidation and helps absorb inclusions — protecting metal quality and improving yield.',
      'As a tundish covering compound and ladle covering compound supplier, Ambika Biotech ships a consistent, NABL-tested granule with reliable bulk availability and full export documentation.',
    ],
    specs: [
      { k: 'SiO₂', v: '80 – 90%' },
      { k: 'Granule Size', v: '0.5 – 4 mm' },
      { k: 'Bulk Density', v: '250 – 450 kg/m³' },
      { k: 'Carbon', v: '3 – 8% (typical)' },
      { k: 'Moisture', v: '2% maximum' },
      { k: 'Thermal Conductivity', v: 'Low (insulating)' },
      { k: 'Colour', v: 'Grey to black' },
    ],
    benefits: [
      'Free-flowing, controlled granulometry for even spreading',
      'Insulating, non-wetting cover that cuts heat loss',
      'Prevents re-oxidation and helps absorb inclusions',
      'Low thermal conductivity for energy savings',
      'Improves metal quality and casting yield',
      'Consistent, NABL-tested quality with export documentation',
    ],
    applications: [
      { title: 'Tundish covering', note: 'Insulating layer over molten steel in continuous casting.', shape: 'diamond', color: A },
      { title: 'Ladle covering', note: 'Heat retention and re-oxidation control during teeming.', shape: 'square', color: G },
      { title: 'Foundry insulation', note: 'Thermal blanket for ladles and pouring operations.', shape: 'triangle', color: A },
      { title: 'Induction & arc furnaces', note: 'Covering compound for melt-shop operations.', shape: 'ring', color: G },
      { title: 'Continuous casting', note: 'Stable covering performance across long sequences.', shape: 'circle', color: A },
      { title: 'Refractory insulation', note: 'Lightweight insulating component in linings.', shape: 'square', color: G },
    ],
    packing: 'Available in 25 kg, 50 kg bags and jumbo bags.',
    related: ['rice-husk-ash-ground-powder', 'rice-husk-ash-pellets', 'rice-husk-pellets'],
  },
  {
    slug: 'rice-husk-ash-pellets',
    name: 'Rice Husk Ash Pellets',
    shortName: 'Rice Husk Ash Pellets',
    category: 'rice-husk-ash',
    categoryLabel: 'Rice Husk Ash',
    code: 'RHA PELLETS',
    tag: 'STEEL / FOUNDRY',
    use: 'Dust-free, free-flowing RHA for steel ladle & tundish insulation.',
    photoLabel: 'PHOTO: RHA pellets',
    heroAlt:
      'Rice Husk Ash Pellets dust-free uniform pellets for steel ladle and tundish insulation - Ambika Biotech',
    seoTitle:
      'Rice Husk Ash Pellets Manufacturer & Exporter India | Ambika Biotech',
    metaDescription:
      'Premium Rice Husk Ash Pellets — dust-free, free-flowing RHA as a ladle & tundish covering compound for steel. Uniform pellets for mechanized feeding. Bulk supply & export from Odisha, India.',
    focusKeyword: 'rice husk ash pellets, tundish covering compound, ladle covering compound',
    value:
      'Uniform, extruded high-silica RHA pellets — a clean, free-flowing ladle and tundish covering compound for steel mills, with minimal dust and easy mechanized handling.',
    tags: ['Dust-Free', 'Free-Flowing', 'High Density'],
    statBig: '85%+',
    statLabel: 'SiO₂ SILICA',
    overviewHeading: 'What are Rice Husk Ash Pellets?',
    overview: [
      'Rice Husk Ash Pellets are uniform, extruded pellets of high-silica rice husk ash, engineered for steel mills that need clean, free-flowing insulation with minimal dust and easy mechanized handling. Compared to loose powder, the pellet form feeds evenly through automated systems, keeps the melt-shop floor dust-free, and packs at higher density for lower storage and freight cost.',
      'Used as an insulating cover over molten steel in ladles and tundishes, the pellets retain heat and cut radiation losses, helping maintain consistent metal temperature. Their uniform size gives even coverage, while reducing skull formation and preventing re-oxidation of the metal — protecting metal quality and improving yield.',
    ],
    specs: [
      { k: 'SiO₂', v: '85% minimum' },
      { k: 'Carbon', v: '3% maximum' },
      { k: 'LOI', v: '4% maximum' },
      { k: 'Moisture', v: '2% maximum' },
      { k: 'Bulk Density', v: '550 – 750 kg/m³' },
      { k: 'Pellet Size', v: '3 – 12 mm' },
      { k: 'pH Value', v: '6 – 7' },
      { k: 'Colour', v: 'Grey' },
    ],
    benefits: [
      'Dust-free — cleaner, safer melt-shop environment',
      'Free-flowing — ideal for automated / mechanized feeding',
      'Uniform size gives even insulation coverage',
      'High bulk density — less storage space and freight cost',
      'Prevents heat loss, re-oxidation and skull formation',
      'Improves metal quality and yield',
    ],
    applications: [
      { title: 'Ladle covering', note: 'Insulating cover over molten steel in ladles.', shape: 'square', color: A },
      { title: 'Tundish covering', note: 'Even, dust-free coverage in continuous casting.', shape: 'diamond', color: G },
      { title: 'Induction furnaces', note: 'Clean, dosable insulation feed.', shape: 'circle', color: A },
      { title: 'Arc furnaces', note: 'Heat retention for melt-shop operations.', shape: 'triangle', color: G },
      { title: 'Foundries', note: 'Handling-friendly insulation for pouring.', shape: 'ring', color: A },
      { title: 'Continuous casting', note: 'Stable performance across long sequences.', shape: 'square', color: G },
    ],
    packing: 'Available in 5 kg, 10 kg, 20 kg and jumbo bags.',
    related: ['rice-husk-ash-ground-powder', 'rice-husk-ash-granules', 'rice-husk-pellets'],
  },

  // ===================== CATEGORY B — RICE HUSK (RAW) =====================
  {
    slug: 'rice-husk-raw',
    name: 'Rice Husk (Raw Whole Husk)',
    shortName: 'Rice Husk',
    category: 'rice-husk',
    categoryLabel: 'Rice Husk',
    code: 'RAW RICE HUSK',
    tag: 'RAW HUSK',
    use: 'Raw husk for biomass fuel, particle boards, bedding and briquette feedstock.',
    photoLabel: 'PHOTO: raw rice husk',
    heroAlt:
      'Raw whole Rice Husk renewable agricultural by-product for fuel, boards and animal bedding - Ambika Ricemill',
    seoTitle:
      'Rice Husk (Raw Whole Husk) Manufacturer & Supplier India | Ambika Ricemill',
    metaDescription:
      'Clean, well-screened raw Rice Husk — renewable biomass fuel, particle-board raw material, animal bedding & briquette feedstock. Bulk supply & export from Odisha, India.',
    focusKeyword: 'rice husk',
    value:
      'Clean, well-screened raw rice husk — a versatile, renewable agricultural by-product for solid fuel, particle boards, animal bedding and briquette / pellet feedstock.',
    tags: ['Biomass Fuel', 'Boards', 'Bedding'],
    statBig: '≈3000',
    statLabel: 'KCAL/KG GCV',
    overviewHeading: 'What is Rice Husk?',
    overview: [
      'Rice husk is the protective outer layer separated from paddy during milling — an abundant, renewable by-product available in consistent volume from our Sambalpur milling base.',
      'Its high calorific value and ready availability make it a cost-effective solid fuel for boilers, while its fibrous structure suits particle boards, briquetting and clean animal bedding. It is also a primary feedstock for rice husk pellets and high-silica rice husk ash.',
      'Ambika Biotech supplies clean, well-screened husk in bulk with reliable logistics and full export documentation.',
    ],
    specs: [
      { k: 'Form', v: 'Raw whole husk' },
      { k: 'Calorific Value (GCV)', v: '~ 3000 – 3200 kcal/kg' },
      { k: 'Moisture', v: '8 – 12% maximum' },
      { k: 'Ash Content', v: '~ 17 – 22%' },
      { k: 'Silica in Ash', v: 'High' },
      { k: 'Bulk Density', v: '~ 100 – 120 kg/m³' },
      { k: 'Colour', v: 'Golden brown' },
      { k: 'Nature', v: 'Organic / biodegradable' },
    ],
    benefits: [
      'High calorific value, renewable solid fuel',
      'Abundant, consistent supply from our milling base',
      'Fibrous structure ideal for boards and briquetting',
      'Clean, absorbent material for animal bedding',
      '100% natural, biodegradable agro by-product',
      'Bulk logistics and full export documentation',
    ],
    applications: [
      { title: 'Boiler fuel', note: 'Renewable solid fuel for steam and process heat.', shape: 'diamond', color: A },
      { title: 'Particle & MDF boards', note: 'Fibrous raw material for engineered boards.', shape: 'square', color: G },
      { title: 'Animal bedding', note: 'Absorbent, clean bedding for poultry and cattle.', shape: 'ring', color: A },
      { title: 'Briquette / pellet feedstock', note: 'Feedstock for densified biomass fuel.', shape: 'triangle', color: G },
      { title: 'Gasification', note: 'Biomass input for producer-gas systems.', shape: 'circle', color: A },
      { title: 'Mushroom substrate', note: 'Growing medium for horticulture.', shape: 'square', color: G },
    ],
    packing: 'Available loose, in bales and jumbo bags; bulk supply for large buyers.',
    related: ['rice-husk-powder', 'rice-husk-pellets', 'rice-husk-ash-ground-powder'],
  },
  {
    slug: 'rice-husk-powder',
    name: 'Rice Husk Powder',
    shortName: 'Rice Husk Powder',
    category: 'rice-husk',
    categoryLabel: 'Rice Husk',
    code: 'RICE HUSK POWDER',
    tag: 'FEED & AGRI',
    use: 'Natural ground husk for animal feed, fertilizer, fillers and boards.',
    photoLabel: 'PHOTO: husk powder',
    heroAlt:
      'Natural ground Rice Husk Powder for animal feed fertilizer and industrial filler - Ambika Ricemill',
    seoTitle:
      'Rice Husk Powder Manufacturer & Supplier India | Ambika Ricemill',
    metaDescription:
      'Rice Husk Powder supplier — natural ground husk for poultry & cattle feed, organic fertilizer / soil conditioning, fillers, particle board & briquette feedstock. Bulk supply & export from Odisha, India.',
    focusKeyword: 'rice husk powder supplier, rice husk for poultry / cattle feed',
    value:
      'Finely ground raw rice husk — a renewable, fibre-rich agro-byproduct for animal feed, organic soil conditioning, industrial fillers and bio-composites.',
    tags: ['Natural', 'Feed & Agri', 'Filler'],
    statBig: '18–22%',
    statLabel: 'NATURAL SILICA',
    overviewHeading: 'What is Rice Husk Powder?',
    overview: [
      'Rice Husk Powder is finely ground raw (un-burnt) rice husk — a renewable agro-byproduct rich in fibre and natural silica. It is used as a low-cost filler and bulking agent in animal and poultry feed, and as an organic soil conditioner that improves aeration and water retention.',
      'It also works as a filler in particle boards, bricks, incense sticks and bio-composites, and as feedstock for briquettes and pellets. Being a natural, biodegradable and abundant material, it offers an eco-friendly raw input across multiple industries.',
      'Note: raw husk powder is light brown / tan in colour, unlike the grey ash products. Supplied to a consistent mesh grade with dependable bulk availability.',
    ],
    specs: [
      { k: 'Form', v: 'Ground raw rice husk' },
      { k: 'Silica Content', v: '~ 18 – 22%' },
      { k: 'Moisture', v: '8 – 10% maximum' },
      { k: 'Ash Content', v: '~ 17 – 20%' },
      { k: 'Calorific Value', v: '~ 3000 – 3500 kcal/kg' },
      { k: 'Particle Size', v: 'Customizable (mesh as required)' },
      { k: 'Colour', v: 'Light brown / tan' },
      { k: 'Nature', v: 'Organic / biodegradable' },
    ],
    benefits: [
      '100% natural, renewable agro-byproduct',
      'Low-cost filler / bulking agent',
      'Improves soil aeration and moisture retention',
      'Versatile across feed, agriculture, board and fuel',
      'Biodegradable and eco-friendly',
      'Consistent mesh grade and reliable bulk supply',
    ],
    applications: [
      { title: 'Animal & poultry feed', note: 'Fibre source and bulking agent in feed blends.', shape: 'square', color: A },
      { title: 'Organic fertilizer', note: 'Soil conditioner improving aeration and retention.', shape: 'ring', color: G },
      { title: 'Particle board & bricks', note: 'Filler in engineered boards and fired bricks.', shape: 'diamond', color: A },
      { title: 'Incense sticks', note: 'Combustible filler base for agarbatti.', shape: 'triangle', color: G },
      { title: 'Briquette / pellet feedstock', note: 'Raw input for densified biomass fuel.', shape: 'circle', color: A },
      { title: 'Bio-composites & mushroom', note: 'Bio-composite filler and growing substrate.', shape: 'square', color: G },
    ],
    packing: 'Available in 25 kg, 50 kg bags and jumbo bags.',
    related: ['rice-husk-raw', 'rice-husk-pellets', 'rice-husk-ash-ground-powder'],
  },
  {
    slug: 'rice-husk-pellets',
    name: 'Rice Husk Pellets (Biomass Fuel)',
    shortName: 'Rice Husk Pellets',
    category: 'rice-husk',
    categoryLabel: 'Rice Husk',
    code: 'BIOMASS FUEL',
    tag: 'CLEAN ENERGY',
    use: 'High-calorific clean biomass fuel for boilers, power plants & gasification.',
    photoLabel: 'PHOTO: husk fuel pellets',
    heroAlt:
      'Rice Husk Pellets renewable biomass fuel for boilers and power plants - Ambika Ricemill',
    seoTitle:
      'Rice Husk Pellets - Biomass Fuel Manufacturer & Exporter India | Ambika Ricemill',
    metaDescription:
      'Rice husk pellets supplier & biomass pellets manufacturer in India — high-calorific clean biomass fuel for boilers, power plants & gasification. Renewable, low moisture. Price on request; bulk supply & export from Odisha.',
    focusKeyword: 'rice husk pellets supplier, biomass pellets manufacturer India, rice husk pellets price',
    value:
      'Compressed, high-calorific rice husk pellets from a dedicated biomass pellets manufacturer — a clean, renewable, carbon-neutral biomass fuel for industrial boilers, power plants and gasification.',
    tags: ['Biomass Fuel', 'High Calorific', 'Carbon-Neutral'],
    statBig: '≈3800',
    statLabel: 'KCAL/KG GCV',
    overviewHeading: 'What are Rice Husk Pellets?',
    overview: [
      'Rice Husk Pellets are compressed cylindrical pellets made from raw rice husk — a clean, renewable biomass fuel. The densified form has higher energy density, consistent size and low moisture, making it ideal for industrial boilers, thermal power plants, biomass gasifiers and heating systems.',
      'Compared with loose husk, pellets are far easier to store, transport and feed automatically, burn more uniformly, and deliver stable heat output. As a carbon-neutral alternative to coal, they help industries cut fuel cost and emissions.',
    ],
    specs: [
      { k: 'Calorific Value (GCV)', v: '~ 3200 – 3800 kcal/kg' },
      { k: 'Moisture', v: '10% maximum' },
      { k: 'Ash Content', v: '~ 15 – 20%' },
      { k: 'Diameter', v: '6 – 10 mm' },
      { k: 'Length', v: '10 – 30 mm' },
      { k: 'Bulk Density', v: '600 – 700 kg/m³' },
      { k: 'Colour', v: 'Light brown' },
      { k: 'Nature', v: 'Renewable / carbon-neutral' },
    ],
    benefits: [
      'High, consistent calorific value',
      'Low moisture — efficient combustion',
      'Densified — easy storage, transport and auto-feeding',
      'Renewable, carbon-neutral alternative to coal',
      'Reduces fuel cost and emissions',
      'Uniform size suited to boiler systems',
    ],
    applications: [
      { title: 'Industrial boilers', note: 'Renewable fuel for steam and process heat.', shape: 'diamond', color: A },
      { title: 'Thermal & biomass power', note: 'Feedstock for electricity generation.', shape: 'square', color: G },
      { title: 'Gasification units', note: 'Clean biomass input for producer gas.', shape: 'triangle', color: A },
      { title: 'Brick kilns', note: 'Efficient fuel for firing operations.', shape: 'ring', color: G },
      { title: 'Heating systems', note: 'Stable heat output for process and space heating.', shape: 'circle', color: A },
      { title: 'Co-firing with coal', note: 'Blendable fuel to cut emissions.', shape: 'square', color: G },
    ],
    packing: 'Available in 25 kg, 40 kg bags and jumbo bags; bulk loose supply for large buyers.',
    related: ['rice-husk-raw', 'rice-husk-powder', 'rice-husk-ash-pellets'],
  },
];

export const SPEC_NOTE =
  'Indicative specifications — confirmed NABL lab values available on request.';

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export const categories: Record<Category, { name: string; slug: string; blurb: string }> = {
  'rice-husk-ash': {
    name: 'Rice Husk Ash',
    slug: 'rice-husk-ash',
    blurb: 'High-silica RHA for steel, construction, cement and refractory industries.',
  },
  'rice-husk': {
    name: 'Rice Husk (Raw)',
    slug: 'rice-husk',
    blurb: 'Raw rice husk and husk products for biomass energy, feed and agriculture.',
  },
};

export const productNames = products.map((p) => p.name);
