import type { Theme } from 'unocss/preset-uno'
import {
  defineConfig,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export const preset = {
  boxShadow: {
    'light-overlay':
      '0px 0px 1px rgba(9, 30, 66, 0.2), 0px 8px 12px rgba(9, 30, 66, 0.14)',
    'dark-overlay':
      '0px 0px 1px rgba(23, 27, 41, 0.2), 0px 8px 12px rgba(23, 27, 41, 0.14)',
  },
  colors: {
    white: '#FFFFFF',
    b: {
      50: '#eff1f6',
      100: '#e6f0ff',
      200: '#b0cfff',
      300: '#8ab8ff',
      400: '#5498ff',
      500: '#3384ff',
      600: '#0065ff',
      700: '#005ce8',
      800: '#0048b5',
      900: '#00388c',
      1000: '#002a6b',
    },
    ba: {
      100: 'rgba(51, 132, 255, 0.04)',
      200: 'rgba(51, 132, 255, 0.08)',
      300: 'rgba(51, 132, 255, 0.16)',
      400: 'rgba(51, 132, 255, 0.32)',
      500: 'rgba(51, 132, 255, 0.48)',
    },
    r: {
      100: '#ffebeb',
      200: '#ffc0c0',
      300: '#ffa1a1',
      400: '#ff7676',
      500: '#ff5c5c',
      600: '#ff3333',
      700: '#e82e2e',
      800: '#b52424',
      900: '#8c1c1c',
      1000: '#6b1515',
    },
    ra: {
      100: 'rgba(255, 92, 92, 0.04)',
      200: 'rgba(255, 92, 92, 0.08)',
      300: 'rgba(255, 92, 92, 0.16)',
      400: 'rgba(255, 92, 92, 0.32)',
      500: 'rgba(255, 92, 92, 0.48)',
    },
    g: {
      100: '#eaf8f2',
      200: '#bdead7',
      300: '#9de0c4',
      400: '#70d1a9',
      500: '#55c999',
      600: '#2abb7f',
      700: '#26aa74',
      800: '#1e855a',
      900: '#176746',
      1000: '#124f35',
    },
    ga: {
      100: 'rgba(85, 201, 153, 0.04)',
      200: 'rgba(85, 201, 153, 0.08)',
      300: 'rgba(85, 201, 153, 0.16)',
      400: 'rgba(85, 201, 153, 0.32)',
      500: 'rgba(85, 201, 153, 0.48)',
    },
    v: {
      100: '#efeef8',
      200: '#cecbe9',
      300: '#b6b2df',
      400: '#958fd0',
      500: '#8179c7',
      600: '#6158b9',
      700: '#5850a8',
      800: '#453e83',
      900: '#353066',
      1000: '#29254e',
    },
    va: {
      100: 'rgba(129, 121, 199, 0.04)',
      200: 'rgba(129, 121, 199, 0.08)',
      300: 'rgba(129, 121, 199, 0.16)',
      400: 'rgba(129, 121, 199, 0.32)',
      500: 'rgba(129, 121, 199, 0.48)',
    },
    o: {
      100: '#fef4e6',
      200: '#fadbb0',
      300: '#f8ca8a',
      400: '#f5b254',
      500: '#f3a333',
      600: '#f08c00',
      700: '#da7f00',
      800: '#aa6300',
      900: '#844d00',
      1000: '#653b00',
    },
    oa: {
      100: 'rgba(240, 140, 0, 0.04)',
      200: 'rgba(240, 140, 0, 0.08)',
      300: 'rgba(240, 140, 0, 0.16)',
      400: 'rgba(240, 140, 0, 0.32)',
      500: 'rgba(240, 140, 0, 0.48)',
    },
    y: {
      100: '#fef7e8',
      200: '#fce6b6',
      300: '#fad993',
      400: '#f8c862',
      500: '#f6bd44',
      600: '#f4ad15',
      700: '#de9d13',
      800: '#ad7b0f',
      900: '#865f0c',
      1000: '#664909',
    },
    ya: {
      100: 'rgba(244, 173, 21, 0.04)',
      200: 'rgba(244, 173, 21, 0.08)',
      300: 'rgba(244, 173, 21, 0.16)',
      400: 'rgba(244, 173, 21, 0.32)',
      500: 'rgba(244, 173, 21, 0.48)',
    },
    light: {
      n: {
        0: '#FFFFFF',
        10: '#fafbfb',
        20: '#f5f6f7',
        30: '#ebedf0',
        40: '#dfe2e6',
        50: '#c2c7d0',
        60: '#b3b9c4',
        70: '#a6aebb',
        80: '#98a1b0',
        90: '#8993a4',
        100: '#7a8699',
        200: '#6b788e',
        300: '#5d6b82',
        400: '#505f79',
        500: '#42526d',
        600: '#354764',
        700: '#243757',
        800: '#15294b',
        900: '#091e42',
      },
      na: {
        100: 'rgba(9, 30, 66, 0.04)',
        200: 'rgba(9, 30, 66, 0.08)',
        300: 'rgba(9, 30, 66, 0.16)',
        400: 'rgba(9, 30, 66, 0.32)',
        500: 'rgba(9, 30, 66, 0.48)',
      },
    },
    dark: {
      n: {
        '-10': '#171B29',
        '0': '#1F2333',
        '5': '#24293A',
        '10': '#2E3244',
        '20': '#35394E',
        '30': '#3E4259',
        '40': '#41455C',
        '50': '#44485D',
        '60': '#494E65',
        '70': '#4E536A',
        '80': '#585D76',
        '90': '#60657D',
        '100': '#7B809C',
        '200': '#939ab4',
        '300': '#9FA6C1',
        '400': '#ADB4CD',
        '500': '#C4C9DB',
        '600': '#D0D4E3',
        '700': '#E7E9F1',
        '800': '#EFF1F6',
        '900': '#FFFFFF',
      },
      na: {
        100: 'rgba(230, 240, 255, 0.04)',
        200: 'rgba(230, 240, 255, 0.08)',
        300: 'rgba(230, 240, 255, 0.16)',
        400: 'rgba(230, 240, 255, 0.32)',
        500: 'rgba(230, 240, 255, 0.48)',
      },
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
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  extendTheme: theme => ({
    ...theme,
    fontFamily: {
      inter: 'Inter',
    },
  }),
})
