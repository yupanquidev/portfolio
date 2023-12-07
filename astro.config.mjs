import tailwind from '@astrojs/tailwind';
import { defineConfig, passthroughImageService } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  image: {
    service: passthroughImageService(),
  },
  integrations: [tailwind()]
});
