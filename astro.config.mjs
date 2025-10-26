import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://nanciee.github.io',
  base: '/sfc_band_site',
  integrations: [tailwind()],
  output: 'static',
  build: {
    format: 'directory'
  }
});

