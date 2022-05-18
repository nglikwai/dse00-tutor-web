import * as R from 'ramda'

type ThemeStyle = CSSStyleDeclaration['cssText']

export type Theme = {
  palette: {
    mainTheme: ThemeStyle
    backgroundColor: ThemeStyle
  }
  width: string
  fontSizes: string[]
  fontColor: string
  fontFamily: string
}

const theme: Theme = {
  palette: {
    mainTheme: '#cc0000',
    backgroundColor: '#fffcf8',
  },
  width: '1200px',
  fontSizes: ['14px', '18px', '22px'],
  fontColor: '#444',
  fontFamily:
    '"PingFang HK", PingFang-HK, PingFangHK, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif',
}

export const lightTheme = R.mergeDeepRight(theme, {})
export const darkTheme = R.mergeDeepRight(theme, {})

export default theme
