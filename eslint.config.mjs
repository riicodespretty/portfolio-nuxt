// @ts-check

import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu({
    stylistic: true,
    unocss: true,
    // https://github.com/francoismassart/eslint-plugin-tailwindcss/issues/280#issuecomment-2029302834
    rules: {
      'object-shorthand': ['warn', 'never'],
      'curly': ['warn', 'all'],
      'no-console': 'warn',
    },
    formatters: {
      graphql: 'prettier',
      css: 'prettier',
      html: 'prettier',
      markdown: false,
    },
    ignores: ['content/**/*'],
  }),
)
