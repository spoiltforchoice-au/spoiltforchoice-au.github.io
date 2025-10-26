import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://spoiltforchoiceband.com.au',
  base: '/',
  integrations: [tailwind()],
  output: 'static',
  build: {
    format: 'directory'
  }
});

