// @ts-check

import antfu from '@antfu/eslint-config'
import { includeIgnoreFile } from '@eslint/compat'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import withNuxt from './.nuxt/eslint.config.mjs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const gitignorePath = path.resolve(__dirname, '.gitignore')

export default withNuxt(
  includeIgnoreFile(gitignorePath),
  antfu({
    unocss: true,
    // https://github.com/francoismassart/eslint-plugin-tailwindcss/issues/280#issuecomment-2029302834
    rules: {
      'object-shorthand': ['warn', 'never'],
      'curly': ['warn', 'all'],
      'max-len': ['error', { code: 120 }],
      'no-console': 'warn',
    },
    formatters: {
      graphql: 'prettier',
      css: 'prettier',
      markdown: 'prettier',
      html: 'prettier',
    },
  }),
)
