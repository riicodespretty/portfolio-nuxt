import type { Theme } from 'unocss/preset-uno'
import {
  defineConfig,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import presetAutoprefixer from 'unocss-preset-autoprefixer'

export const preset = {
  boxShadow: {
    'light-overlay':
      '0px 0px 1px rgba(9, 30, 66, 0.2), 0px 8px 12px rgba(9, 30, 66, 0.14)',
    'dark-overlay':
      '0px 0px 1px rgba(23, 27, 41, 0.2), 0px 8px 12px rgba(23, 27, 41, 0.14)',
  },
  colors: {
    neutral: {
      DEFAULT: 'oklch(96.14% 0.0013 286.38)', // #f2f2f3
      dark: 'oklch(15.48% 0.0021 286.15)', // #0c0c0d
      50: 'oklch(96.14% 0.001 286.38)',
      100: 'oklch(91.97% 0.004 286.32)',
      200: 'oklch(84.02% 0.006 286.28)',
      300: 'oklch(75.62% 0.010 286.16)',
      400: 'oklch(67.24% 0.012 286.08)',
      500: 'oklch(58.32% 0.017 285.87)',
      600: 'oklch(49.89% 0.013 285.93)',
      700: 'oklch(40.80% 0.012 285.87)',
      800: 'oklch(31.47% 0.007 285.99)',
      900: 'oklch(21.03% 0.006 285.89)',
      950: 'oklch(15.48% 0.002 286.15)',
    },
    primary: {
      DEFAULT: 'oklch(73.71% 0.148 291.62)', // #ac97ff
      50: 'oklch(93.44% 0.035 296.28)',
      100: 'oklch(87.00% 0.071 293.87)',
      200: 'oklch(74.16% 0.145 291.46)',
      300: 'oklch(62.16% 0.217 287.67)',
      400: 'oklch(52.24% 0.274 280.40)',
      500: 'oklch(46.64% 0.304 270.67)',
      600: 'oklch(39.55% 0.256 271.33)',
      700: 'oklch(32.13% 0.206 272.44)',
      800: 'oklch(24.21% 0.153 274.09)',
      900: 'oklch(15.71% 0.095 280.06)',
      950: 'oklch(11.08% 0.064 287.00)',
    },
    secondary: {
      DEFAULT: 'oklch(73.01% 0.1816 353.74)', // #fb70b0
      50: 'oklch(94.64% 0.032 348.09)',
      100: 'oklch(89.64% 0.065 348.56)',
      200: 'oklch(80.18% 0.134 350.88)',
      300: 'oklch(72.24% 0.198 354.35)',
      400: 'oklch(66.79% 0.244 358.71)',
      500: 'oklch(64.29% 0.258 5.28)',
      600: 'oklch(54.37% 0.219 4.81)',
      700: 'oklch(43.98% 0.177 4.06)',
      800: 'oklch(32.96% 0.133 1.91)',
      900: 'oklch(20.87% 0.085 357.72)',
      950: 'oklch(14.29% 0.059 352.38)',
    },
    tertiary: {
      DEFAULT: 'oklch(15.13% 0.0768 269.43)', // #03052b
      dark: 'oklch(88.66% 0.0522 282.9)', // #d4d6fc
      50: 'oklch(93.65% 0.028 283.66)',
      100: 'oklch(87.50% 0.058 281.91)',
      200: 'oklch(74.85% 0.120 280.98)',
      300: 'oklch(62.73% 0.185 277.24)',
      400: 'oklch(51.83% 0.246 271.70)',
      500: 'oklch(44.50% 0.286 265.50)',
      600: 'oklch(37.91% 0.241 265.72)',
      700: 'oklch(31.03% 0.192 266.31)',
      800: 'oklch(23.71% 0.140 267.51)',
      900: 'oklch(16.09% 0.083 268.45)',
      950: 'oklch(11.69% 0.051 271.52)',
    },
    accent: {
      DEFAULT: 'oklch(79.75% 0.1141 233.93)', // #6bc9fb
      50: 'oklch(96.36% 0.020 229.03)',
      100: 'oklch(92.83% 0.041 230.98)',
      200: 'oklch(86.03% 0.079 231.67)',
      300: 'oklch(79.49% 0.115 234.50)',
      400: 'oklch(73.85% 0.145 237.69)',
      500: 'oklch(69.06% 0.166 243.07)',
      600: 'oklch(58.55% 0.139 242.67)',
      700: 'oklch(47.54% 0.111 242.03)',
      800: 'oklch(36.13% 0.081 239.70)',
      900: 'oklch(23.46% 0.049 236.31)',
      950: 'oklch(16.32% 0.031 232.75)',
    },
    error: {
      DEFAULT: 'oklch(93.21% 0.1486 100.51)', // #ffeb6b
      50: 'oklch(98.73% 0.030 100.86)',
      100: 'oklch(97.36% 0.057 99.87)',
      200: 'oklch(95.02% 0.110 100.35)',
      300: 'oklch(93.16% 0.153 100.80)',
      400: 'oklch(91.40% 0.179 99.87)',
      500: 'oklch(89.87% 0.186 97.86)',
      600: 'oklch(76.08% 0.157 98.14)',
      700: 'oklch(61.62% 0.128 98.58)',
      800: 'oklch(46.02% 0.095 98.48)',
      900: 'oklch(29.18% 0.061 99.88)',
      950: 'oklch(19.88% 0.041 100.69)',
    },
    success: {
      DEFAULT: 'oklch(79.48% 0.1302 162.45)', // #61d6a3
      50: 'oklch(97.21% 0.018 166.39)',
      100: 'oklch(94.42% 0.037 168.37)',
      200: 'oklch(88.91% 0.071 166.27)',
      300: 'oklch(83.89% 0.104 164.77)',
      400: 'oklch(79.05% 0.133 162.35)',
      500: 'oklch(74.93% 0.156 159.57)',
      600: 'oklch(63.44% 0.130 159.68)',
      700: 'oklch(51.69% 0.104 160.18)',
      800: 'oklch(38.92% 0.076 160.60)',
      900: 'oklch(25.34% 0.044 162.56)',
      950: 'oklch(17.49% 0.025 166.65)',
    },
  },
} as const satisfies Partial<Theme>

export default defineConfig({
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
})
