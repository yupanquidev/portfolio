// @ts-check
import { defineConfig, envField } from 'astro/config'

import tailwind from '@astrojs/tailwind'
import vercelAdapter from '@astrojs/vercel'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
  adapter: vercelAdapter(),
  prefetch: true,
  env: {
    schema: {
      GEOLOCATION: envField.string({ context: "client", access: "public" }),
    }
  }
})
