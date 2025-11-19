import { StyleSheet } from 'react-native-unistyles'
import { breakpoints } from './breakpoints'
import { classicTheme } from './classicTheme'
import { newTheme } from './newTheme'
import { newThemeAllowFontScaling } from './newThemeAllowFontScaling'
import type { Theme } from './types/theme'

type AppBreakpoints = typeof breakpoints

type AppThemes = {
  juiced: Theme
  juicedAllowFontScaling: Theme
  classic: Theme
}

// override library types
declare module 'react-native-unistyles' {
  export interface UnistylesBreakpoints extends AppBreakpoints {}
  export interface UnistylesThemes extends AppThemes {}
}

StyleSheet.configure({
  themes: {
    juiced: newTheme,
    juicedAllowFontScaling: newThemeAllowFontScaling,
    classic: classicTheme,
  },
  breakpoints: breakpoints,
  settings: {
    adaptiveThemes: false,
    initialTheme: 'juiced',
  },
})
