// ============================================================================
//  Central site configuration — single source of truth for NAP, contact,
//  social links and lead-capture settings. Edit values here; they flow into
//  the header, footer, contact page, JSON-LD schema and the quote forms.
// ============================================================================

export const site = {
  name: 'Ambika Biotech',
  legalName: 'Ambika Ricemill & Ambika Biotech',
  brand: 'RHA India',
  tagline: 'Rice Husk Ash Manufacturer & Exporter',
  url: 'https://rhaindia.com',
  description:
    'Manufacturer & exporter of high-silica Rice Husk Ash and rice husk products from Sambalpur, Odisha, India.',

  // ---- Contact / NAP (used in footer, contact page, schema) ----
  phoneDisplay: '+91 78150 64339',
  phoneE164: '+917815064339', // for tel: links
  whatsapp: '917815064339', // for wa.me links
  whatsappMessage:
    "Hello Ambika Biotech, I'd like a quote for Rice Husk Ash / rice husk products.",
  email: 'manigupta6777@gmail.com',
  gstin: '21AALFA2111K1Z0',

  address: {
    street: 'Sansinghari, A. Kantapali',
    locality: 'Sambalpur',
    region: 'Odisha',
    postalCode: '768004',
    country: 'India',
    countryCode: 'IN',
    full: 'Sansinghari, A. Kantapali, Sambalpur, Odisha, India',
  },

  geo: {
    lat: 21.4355,
    lng: 83.9183,
  },

  // Google Maps embed (from the brief)
  mapsEmbedQuery: '21.435528,83.920861',
  mapsLink:
    'https://www.google.com/maps?ll=21.435539,83.918276&z=14&t=m&hl=en&gl=IN&mapclient=embed&q=21.435528,83.920861',

  openingHours: 'Mo-Sa 09:00-18:00',

  social: {
    facebook: '',
    instagram: '',
    linkedin: '',
    youtube: '',
  },

  // ---- Lead capture ----
  // Web3Forms access key — sends each submission to the email above AND can be
  // linked to a Google Sheet from the Web3Forms dashboard.
  // Get a free key at https://web3forms.com and paste it here (or set
  // PUBLIC_WEB3FORMS_KEY in the environment).
  web3formsKey: import.meta.env.PUBLIC_WEB3FORMS_KEY || 'REPLACE_WITH_WEB3FORMS_ACCESS_KEY',

  // Google Apps Script web-app URL (ends in /exec). Each lead is also appended
  // to your Google Sheet via this endpoint, in parallel with the email above.
  // See docs/FORM_SETUP.md. Leave blank to disable the Sheet integration.
  sheetsEndpoint: import.meta.env.PUBLIC_SHEETS_ENDPOINT || '',

  // ---- Analytics ----
  // Paste the GA4 Measurement ID (e.g. "G-XXXXXXX") to enable analytics.
  ga4Id: import.meta.env.PUBLIC_GA4_ID || '',
  // Google Search Console verification token (the content="" value).
  gscVerification: import.meta.env.PUBLIC_GSC_VERIFICATION || '',
} as const;

export const trustStrip = [
  { big: '20+', label: 'Years of manufacturing experience' },
  { big: 'NABL', label: 'Tested & certified quality' },
  { big: '85–92%', label: 'High-silica SiO₂ content' },
  { big: '3+', label: 'Export regions worldwide' },
] as const;
