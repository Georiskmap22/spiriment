// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  // vgsap: {
  //   presets: [],
  //   breakpoint: 768,
  //   scroller: '',
  //   composable: true
  // },
  modules: [
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    'v-gsap-nuxt',
    '@pinia/nuxt'
  ],
      pinia: {
      /**
       * Automatically add stores dirs to the auto imports. This is the same as
       * directly adding the dirs to the `imports.dirs` option. If you want to
       * also import nested stores, you can use the glob pattern `./stores/**`
       * (on Nuxt 3) or `app/stores/**` (on Nuxt 4+)
       *
       * @default `['stores']`
       */
        storesDirs: []
    }

})