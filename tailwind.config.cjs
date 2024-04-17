/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx}'],
  theme: {
    fontFamily: {},
    extend: {
      boxShadow: {
        'lg': '0px 0px 15px -1px rgb(0 0 0 / 0.1)'
      }
    }
  },
  plugins: []
}