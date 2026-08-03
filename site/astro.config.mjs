// @ts-check
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';
import { rm } from 'node:fs/promises';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const r = (p) => fileURLToPath(new URL(p, import.meta.url));

/**
 * Dev-Tools unter /tools (Foto-Positionierer, Karten-Editor) sollen nur lokal
 * im `astro dev` verfügbar sein, aber NICHT deployt werden. Nach dem Build wird
 * das /tools-Verzeichnis wieder aus dist entfernt.
 */
const excludeDevTools = {
  name: 'exclude-dev-tools',
  hooks: {
    'astro:build:done': async ({ dir, logger }) => {
      await rm(new URL('./tools/', dir), { recursive: true, force: true });
      logger.info('Dev-Tools (/tools) aus dem Build entfernt.');
    },
  },
};

// Domain wird später gesetzt (TODO: finale Domain von Alia).
const SITE_URL = process.env.SITE_URL ?? 'https://flintasialand.de';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  // Deutsch als Primärsprache (unter /), Englisch unter /en/.
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  // /timetable lebt jetzt als Umschalt-Ansicht auf /line-up.
  redirects: {
    '/timetable': '/line-up#timetable',
  },
  integrations: [
    sitemap({ filter: (page) => !page.includes('/tools/') }),
    excludeDevTools,
  ],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      // Muss zu den paths in tsconfig.json passen (dev + build).
      alias: {
        '@': r('./src'),
        '@components': r('./src/components'),
        '@blocks': r('./src/components/blocks'),
        '@ui': r('./src/components/ui'),
        '@lib': r('./src/lib'),
        '@content': r('./src/content'),
        '@styles': r('./src/styles'),
        '@assets': r('./src/assets'),
        '@layouts': r('./src/layouts'),
      },
    },
  },
  image: {
    // Responsive Bilder beim Build (WebP/AVIF via sharp).
    responsiveStyles: true,
  },
});
