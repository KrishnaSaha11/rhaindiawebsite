import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Canonical production URL. Update if the final domain differs.
export default defineConfig({
  site: 'https://rhaindia.com',
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
