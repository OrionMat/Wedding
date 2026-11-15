// @ts-check
import { defineConfig } from 'astro/config';
import { readdir, readFile, unlink } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * Astro copies every image that's imported anywhere into dist/_astro, even ones no page
 * ends up showing (e.g. the schedule's watercolours while FEATURES.schedule is off in
 * src/config.ts). After each build, delete any image there that no page, stylesheet or
 * script refers to, so held-back sections don't ship their pictures.
 */
const dropUnusedImages = () => ({
  name: 'drop-unused-images',
  hooks: {
    'astro:build:done': async ({ dir, logger }) => {
      const root = fileURLToPath(dir);
      const files = (await readdir(root, { recursive: true })).map(String);
      const text = (
        await Promise.all(files.filter((f) => /\.(html|css|js|xml|json|webmanifest)$/.test(f)).map((f) => readFile(join(root, f), 'utf8')))
      ).join('\n');
      const unused = files.filter((f) => /^_astro[\\/][^\\/]+\.(png|jpe?g|webp|avif|gif|svg)$/i.test(f) && !text.includes(f.split(/[\\/]/).pop()));
      await Promise.all(unused.map((f) => unlink(join(root, f))));
      if (unused.length) logger.info(`removed ${unused.length} unused image(s)`);
    },
  },
});

export default defineConfig({
  // TODO: set to the final domain once DNS is moved off Wix
  site: 'https://www.orion-josephine.com',
  trailingSlash: 'ignore',
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
  integrations: [dropUnusedImages()],
});
