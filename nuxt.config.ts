import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'

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
  css: ['~/assets/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
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
    '@nuxtjs/color-mode',
    '@nuxtjs/storybook',
    '@vueuse/nuxt',
    'nuxt-delay-hydration',
  ],
  eslint: {
    config: {
      standalone: false,
    },
  },
  fonts: {
    providers: {
      fontshare: false,
    },
    families: [
      { name: 'Inter', provider: 'fontsource' },
    ],
  },
  storybook: {
    host: 'http://localhost',
    port: 6006,
  },
  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            default: 'github-light',
            dark: 'github-dark',
            sepia: 'monokai',
          },
        },
      },
    },
    preview: {
      api: 'https://api.nuxt.studio',
      dev: import.meta.dev,
    },
  },
  colorMode: {
    preference: 'system',
    classSuffix: '',
  },
})
