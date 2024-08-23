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
  srcDir: 'src/',
  modules: ['@unocss/nuxt', '@nuxt/eslint'],
  eslint: {
    config: {
      standalone: false,
    },
  },
})