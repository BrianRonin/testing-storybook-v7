// .storybook/YourTheme.js

import { create } from '@storybook/theming/create'
import { dark_theme } from '../src/styles/theme/dark'

const x: {
  base: 'light' | 'dark'
  colorPrimary?: string
  colorSecondary?: string
  appBg?: string
  appContentBg?: string
  appBorderColor?: string
  appBorderRadius?: number
  fontBase?: string
  fontCode?: string
  textColor?: string
  textInverseColor?: string
  textMutedColor?: string
  barTextColor?: string
  barSelectedColor?: string
  barBg?: string
  buttonBg?: string
  buttonBorder?: string
  booleanBg?: string
  booleanSelectedBg?: string
  inputBg?: string
  inputBorder?: string
  inputTextColor?: string
  inputBorderRadius?: number
  brandTitle?: string
  brandUrl?: string
  brandImage?: string
  brandTarget?: string
  gridCellSize?: number
} = {
  base: 'dark',
  brandTitle: 'logo',
  brandUrl: '/',
  brandImage: '/vite.svg',
  brandTarget: '_self',

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',
  //
  colorPrimary: dark_theme.colors._primary[4],
  colorSecondary: dark_theme.colors._secondary[2],

  // UI
  appBg: dark_theme.colors._bg[0],
  appContentBg: '#424242',
  appBorderColor: '#383838',
  appBorderRadius: 4,

  // Text colors
  textColor: dark_theme.colors.text[3],
  textInverseColor: '#1f1f1f',

  // Toolbar default and active colors
  barTextColor: 'hsl(0, 0%, 24%)',
  barSelectedColor: 'hsl(0, 0%, 27%)',
  barBg: 'hsl(0, 0%, 27%)',

  // Form colors
  inputBg: 'hsl(0, 0%, 24%)',
  inputBorder: '#767983',
  inputTextColor: '#8c909f',
  inputBorderRadius: 2,
}

export const myThema = create(x)
