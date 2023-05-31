import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  server: {
    host: true,
    strictPort: true,
    port: 8080
  },
  integrations: [tailwind()]
});