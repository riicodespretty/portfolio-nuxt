import { DocsContainer as BaseContainer, type DocsContainerProps } from '@storybook/blocks'
import { addons } from '@storybook/preview-api'
import { create, themes } from '@storybook/theming'
import type { FC, PropsWithChildren } from 'react'
import { createElement, useEffect, useState } from 'react'
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode'
// @ts-expect-error: Cannot find type module declarations, resolved by vite alias
import { store } from 'storybook-dark-mode/tool'
import { preset } from '../uno.config'

const presetColors = preset.colors

export const shockbyteStorybookDarkTheme = create({
  ...themes.dark,
  appBg: presetColors.dark.n[0],
  appContentBg: presetColors.dark.n[10],
  barBg: presetColors.dark.n[10],
})

export const shockbyteStorybookLightTheme = create({
  ...themes.light,
  appBg: presetColors.white,
})

/**
 * Previous workaround does not work anymore on Storybook v8:
 *
 * @see {@link https://github.com/hipstersmoothie/storybook-dark-mode/issues/180#issuecomment-1573276315 Deprecated Workaround}
 * @see {@link https://github.com/storybookjs/storybook/discussions/22484#discussioncomment-8395746 Forked Solution}
 * @see {@link https://github.com/hipstersmoothie/storybook-dark-mode/blob/master/src/index.tsx Original}
 */
export const DocsContainer: FC<PropsWithChildren<DocsContainerProps>> = (props) => {
  const [isDark, setIsDark] = useState(store().current === 'dark')
  const chan = addons.getChannel()

  useEffect(() => {
    chan.on(DARK_MODE_EVENT_NAME, setIsDark)
    return () => chan.off(DARK_MODE_EVENT_NAME, setIsDark)
  }, [chan])

  const currentProps = { ...props }
  currentProps.theme = isDark ? shockbyteStorybookDarkTheme : shockbyteStorybookLightTheme

  return createElement(
    BaseContainer,
    currentProps,
  )
}
