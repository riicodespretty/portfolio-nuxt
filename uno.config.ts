import type { Theme } from 'unocss/preset-uno'
import { mergeConfigs } from '@unocss/core'
import {
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import presetAutoprefixer from 'unocss-preset-autoprefixer'
import config from './.nuxt/uno.config.mjs'

export const preset = {
  boxShadow: {
    'light-overlay':
      '0px 0px 1px rgba(9, 30, 66, 0.2), 0px 8px 12px rgba(9, 30, 66, 0.14)',
    'dark-overlay':
      '0px 0px 1px rgba(23, 27, 41, 0.2), 0px 8px 12px rgba(23, 27, 41, 0.14)',
  },
  colors: {
    neutral: {
      DEFAULT: 'oklch(var(--neutral-default))', // #f2f2f3
      dark: 'oklch(var(--neutral-dark))', // #0c0c0d
      50: 'oklch(var(--text-50))',
      100: 'oklch(var(--text-100))',
      200: 'oklch(var(--text-200))',
      300: 'oklch(var(--text-300))',
      400: 'oklch(var(--text-400))',
      500: 'oklch(var(--text-500))',
      600: 'oklch(var(--text-600))',
      700: 'oklch(var(--text-700))',
      800: 'oklch(var(--text-800))',
      900: 'oklch(var(--text-900))',
      950: 'oklch(var(--text-950))',
    },
    tertiary: {
      DEFAULT: 'oklch(var(--tertiary-default))', // #d4d6fc
      dark: 'oklch(var(--tertiary-dark))', // #03052b
      50: 'oklch(var(--tertiary-50))',
      100: 'oklch(var(--tertiary-100))',
      200: 'oklch(var(--tertiary-200))',
      300: 'oklch(var(--tertiary-300))',
      400: 'oklch(var(--tertiary-400))',
      500: 'oklch(var(--tertiary-500))',
      600: 'oklch(var(--tertiary-600))',
      700: 'oklch(var(--tertiary-700))',
      800: 'oklch(var(--tertiary-800))',
      900: 'oklch(var(--tertiary-900))',
      950: 'oklch(var(--tertiary-950))',
    },
    primary: {
      DEFAULT: 'oklch(var(--primary-default))', // #ac97ff
      50: 'oklch(var(--primary-50))',
      100: 'oklch(var(--primary-100))',
      200: 'oklch(var(--primary-200))',
      300: 'oklch(var(--primary-300))',
      400: 'oklch(var(--primary-400))',
      500: 'oklch(var(--primary-500))',
      600: 'oklch(var(--primary-600))',
      700: 'oklch(var(--primary-700))',
      800: 'oklch(var(--primary-800))',
      900: 'oklch(var(--primary-900))',
      950: 'oklch(var(--primary-950))',
    },
    secondary: {
      DEFAULT: 'oklch(var(--secondary-default))', // #fb70b0
      50: 'oklch(var(--secondary-50))',
      100: 'oklch(var(--secondary-100))',
      200: 'oklch(var(--secondary-200))',
      300: 'oklch(var(--secondary-300))',
      400: 'oklch(var(--secondary-400))',
      500: 'oklch(var(--secondary-500))',
      600: 'oklch(var(--secondary-600))',
      700: 'oklch(var(--secondary-700))',
      800: 'oklch(var(--secondary-800))',
      900: 'oklch(var(--secondary-900))',
      950: 'oklch(var(--secondary-950))',
    },
    accent: {
      DEFAULT: 'oklch(var(--accent-default))', // #6bc9fb
      50: 'oklch(var(--accent-50))',
      100: 'oklch(var(--accent-100))',
      200: 'oklch(var(--accent-200))',
      300: 'oklch(var(--accent-300))',
      400: 'oklch(var(--accent-400))',
      500: 'oklch(var(--accent-500))',
      600: 'oklch(var(--accent-600))',
      700: 'oklch(var(--accent-700))',
      800: 'oklch(var(--accent-800))',
      900: 'oklch(var(--accent-900))',
      950: 'oklch(var(--accent-950))',
    },
    success: {
      DEFAULT: 'oklch(var(--success-default))', // #61d6a3
      50: 'oklch(var(--success-50))',
      100: 'oklch(var(--success-100))',
      200: 'oklch(var(--success-200))',
      300: 'oklch(var(--success-300))',
      400: 'oklch(var(--success-400))',
      500: 'oklch(var(--success-500))',
      600: 'oklch(var(--success-600))',
      700: 'oklch(var(--success-700))',
      800: 'oklch(var(--success-800))',
      900: 'oklch(var(--success-900))',
      950: 'oklch(var(--success-950))',
    },
    error: {
      DEFAULT: 'oklch(var(--error-default))', // #ffeb6b
      50: 'oklch(var(--error-50))',
      100: 'oklch(var(--error-100))',
      200: 'oklch(var(--error-200))',
      300: 'oklch(var(--error-300))',
      400: 'oklch(var(--error-400))',
      500: 'oklch(var(--error-500))',
      600: 'oklch(var(--error-600))',
      700: 'oklch(var(--error-700))',
      800: 'oklch(var(--error-800))',
      900: 'oklch(var(--error-900))',
      950: 'oklch(var(--error-950))',
    },

  },
} as const satisfies Partial<Theme>

export default mergeConfigs([config, {
  outputToCssLayers: true,
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetAutoprefixer(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  theme: preset,
  extendTheme: theme => ({
    ...theme,
    fontSize: {
      'sm': '0.750rem',
      'base': '1rem',
      'xl': '1.333rem',
      '2xl': '1.777rem',
      '3xl': '2.369rem',
      '4xl': '3.158rem',
      '5xl': '4.210rem',
    },
    fontFamily: {
      inter: 'Inter',
    },
  }),
}])
