// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // TODO: set to the final domain once DNS is moved off Wix
  site: 'https://www.orion-josephine.com',
  trailingSlash: 'ignore',
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
});
