import {
  css,
  Global,
  useTheme,
} from '@emotion/react'
import { CSS_ScrollBar } from './css/scrollbar/scrollbar_1.css'
import { CSS_notSelect } from './css/selection.css'

const GlobalStyles = () => {
  const theme = useTheme()

  return (
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,100;1,300;1,400;1,500&display=swap');
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          ${CSS_notSelect(theme)}
        }
        html {
          font-size: 62.5%;
          font-family: 'Roboto', sans-serif;
          scroll-behavior: smooth;
          ${CSS_ScrollBar(theme)}
        }
        --body-bg: ${theme.colors.bg[0]};
        body {
          background: ${theme.colors.bg[0]};
          font-size: 16px;
          color: ${theme.colors.text[4]};
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-weight: 300;
          margin: ${theme.spacings.large} 0;
        }

        @media ${theme.media.lMedium} {
          button {
            font-size: 1em !important;
          }
          input {
            font-size: 1em !important;
          }
        }
      `}
    />
  )
}

export default GlobalStyles
