// src/styled-components.d.ts
import 'styled-components'
import theme from './theme' // Adjust the path to where your theme is defined

type ThemeType = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
