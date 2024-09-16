import { fileURLToPath } from 'node:url'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  typescript: {
    typeCheck: 'build',
  },
  vite: {
    resolve: {
      alias: {
        'storybook-dark-mode/tool': fileURLToPath(new URL('./node_modules/storybook-dark-mode/dist/esm/Tool.js', import.meta.url)),
      },
    },
  },
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxthq/studio',
    '@nuxtjs/color-mode',
    '@nuxtjs/storybook',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    'nuxt-delay-hydration',
  ],
  eslint: {
    config: {
      standalone: false,
    },
  },
  fonts: {
    families: [
      { name: 'Inter', provider: 'fontsource' },
    ],
  },
  storybook: {
    host: 'http://localhost',
    port: 6006,
  },
})
