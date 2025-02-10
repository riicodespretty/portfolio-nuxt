import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [vue()],
  test: {
    browser: {
      enabled: true,
      provider: 'playwright',
      // https://vitest.dev/guide/browser/playwright
      instances: [
        { browser: 'chromium' },
        { browser: 'firefox' },
        { browser: 'webkit' },
      ],
    },
  },
})
