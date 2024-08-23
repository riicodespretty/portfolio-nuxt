import type { Preview } from '@storybook-vue/nuxt'
import '~/assets/main.css'
import { DocsContainer, shockbyteStorybookDarkTheme, shockbyteStorybookLightTheme } from './themes'

const preview: Preview = {
  parameters: {
    darkMode: {
      dark: shockbyteStorybookDarkTheme,
      light: shockbyteStorybookLightTheme,
      stylePreview: true,
      classTarget: 'html',
    },
    docs: {
      container: DocsContainer,
    },
    actions: { argTypesRegex: /^on[A-Z].*/ },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
