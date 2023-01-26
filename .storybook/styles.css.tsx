import { css } from '@emotion/react'
import { PrismjsTheme } from './prismjs-theme'
import { Theme } from './types'

export const myCSS = (theme: Theme) => css`
  .sbdocs-preview {
    background: ${theme.colors.bg[0]} !important;
  }

  .sbdocs-wrapper {
    color: #f0e7d8 !important;
    background: black !important;
    button {
      background: black !important;
    }
    ${PrismjsTheme}
  }
  th,
  td,
  table
    :not(.docs-story)
    :not(.docs)
    :not(.sbdocs-preview) {
    color: white !important;
    background: black !important;
    ${PrismjsTheme}
  }

  /* .css-bdtlhc {
    background: inherit;
    color: inherit;
    padding: 0;
    border: 0;
  }
  li {
    font-size: 1em !important;
  }
  pre {
    margin: 0;
    font-size: 20px !important;
    line-height: 27px !important;
    span {
      margin: 20px !important;
      display: flex;
      content: 5rem;
    }
  } */
`
