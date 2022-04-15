import * as R from 'ramda'

type ThemeStyle = CSSStyleDeclaration['cssText']

export type Theme = {
  palette: {
    mainTheme: ThemeStyle
  }
  fontSizes: string[]
  fontFamily: string
}

const theme: Theme = {
  palette: {
    mainTheme: '#cc0000',
  },
  fontSizes: ['14px', '18px', '22px'],
  fontFamily:
    '"PingFang HK", PingFang-HK, PingFangHK, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif',
}

export const lightTheme = R.mergeDeepRight(theme, {})
export const darkTheme = R.mergeDeepRight(theme, {})

export default theme
