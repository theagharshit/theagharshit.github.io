// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// User site: served at the domain root, so no `base`.
// When a custom domain is added later, change `site` (and add public/CNAME).
export default defineConfig({
  site: 'https://theagharshit.github.io',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'never' },
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        "connect-src 'self'",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'none'",
        "upgrade-insecure-requests"
      ]
    }
  }
});
