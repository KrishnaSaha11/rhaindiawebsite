import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Canonical production URL — the primary www host (keeps canonical, og and
// the generated sitemap all on the same domain).
export default defineConfig({
  site: 'https://www.rhaindia.com',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      changefreq: 'weekly',
      priority: 0.7,
    }),
  ],
});
