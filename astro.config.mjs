// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  site: 'https://calm-the-fi-down.github.io/',
  integrations: [react(), tailwind()]
});