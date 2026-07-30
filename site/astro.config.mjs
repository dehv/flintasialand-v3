// @ts-check
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const r = (p) => fileURLToPath(new URL(p, import.meta.url));

// Domain wird später gesetzt (TODO: finale Domain von Alia).
const SITE_URL = process.env.SITE_URL ?? 'https://flintasialand.de';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  // Deutsch als Primärsprache; i18n-ready (Englisch später ohne Umbau ergänzbar).
  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
    routing: { prefixDefaultLocale: false },
  },
  // /timetable lebt jetzt als Umschalt-Ansicht auf /line-up.
  redirects: {
    '/timetable': '/line-up#timetable',
  },
  integrations: [sitemap()],
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
