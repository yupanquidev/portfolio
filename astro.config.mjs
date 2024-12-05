// @ts-check
import { defineConfig, envField } from 'astro/config'

import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
  adapter: vercel(),
  prefetch: true,

  env: {
    schema: {
      GEOLOCATION: envField.string({ context: "server", access: "public" }),
      VISIT: envField.string({ context: "server", access: "public" }),
    }
  }
})
