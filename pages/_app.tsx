import '../src/i18n'
import '@fortawesome/fontawesome-svg-core/styles.css'


import { config } from '@fortawesome/fontawesome-svg-core'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import theme from 'src/constants/theme'

import { store } from 'src/redux/store'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
config.autoAddCss = false


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, viewport-fit=cover,  initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
        />
      </Head>
      <GlobalStyle />
      <ReduxProvider store={store}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ReduxProvider>
    </>
  )
}

export default MyApp
