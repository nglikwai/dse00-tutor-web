import React from 'react'
import { darkTheme, lightTheme, Theme } from 'src/constants/theme'
import { createGlobalStyle, ThemeProvider as Provider } from 'styled-components'

type Props = {
  children: React.ReactElement
}

export const ThemeProvider = ({ children }: Props) => {
  // TODO: support dark theme
  const isDarkMode = false
  const theme = isDarkMode ? darkTheme : lightTheme

  return (
    <Provider theme={theme}>
      <>
        <GlobalStyle />
        {children}
      </>
    </Provider>
  )
}

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    min-width: 320px;
    font-family: ${({ theme }: { theme: Theme }) => theme.fontFamily};
  }
`
