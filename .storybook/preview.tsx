import React from 'react'
import canvas from './canvas.mdx'
import {
  css,
  ThemeProvider,
  useTheme,
} from '@emotion/react'
import { DefaultTheme } from '../src/styles/theme/default'
import { dark_theme } from '../src/styles/theme/dark'
import { PrismjsTheme } from './prismjs-theme'
import GlobalStyles from '../src/styles/globals'
import { myCSS } from './styles.css'
import styled from '@emotion/styled'

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    toolbar: {
      icon: 'paintbrush',
      // Array of plain string values or MenuItem shape
      items: [
        {
          value: 'light',
          title: 'Light',
          left: '🔆',
        },
        {
          value: 'dark',
          title: 'Dark',
          left: '⚜',
        },
      ],
      // Change title based on selected value
      dynamicTitle: true,
    },
  },
}

const themes = {
  light: DefaultTheme,
  dark: dark_theme,
}

const withGlobalStyle = (Story) => {
  const theme = useTheme()

  return (
    <>
      <style>
        {myCSS(theme).styles.toString()}
      </style>
      <GlobalStyles />
      <Story />
    </>
  )
}

export const withTheme = (Story, context) => {
  const { theme } = context.globals
  return (
    <ThemeProvider
      theme={themes[theme] || themes['dark']}
    >
      <Story />
    </ThemeProvider>
  )
}
// .storybook/preview.js

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgorunds: {
    defualt: 'transparent',
  },
  layout: 'fullscreen',
}

export const decorators = [
  withGlobalStyle,
  withTheme,
]
