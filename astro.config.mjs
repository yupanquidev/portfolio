import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  server: {
    host: true,
    strictPort: true,
    port: 8080
  },
  integrations: [tailwind(), react()]
});