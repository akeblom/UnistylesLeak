import { PixelRatio } from 'react-native'
import { newTheme } from './newTheme'
import { Theme } from './types/theme'
import { FontSizes } from './types/typography'

const fontScale = PixelRatio.getFontScale()

const fontSizes: FontSizes = {
  detail: 13,
  sm: 13,
  md: 15,
  lg: 18,
  xl: 22,
  '2xl': 27,
  '3xl': 40,
  '4xl': 48,
  '5xl': 58,
}

const lineHeights = {
  detail: 17,
  sm: 20,
  md: 23,
  lg: 23,
  xl: 29,
  '2xl': 35,
  '3xl': 44,
  '4xl': 55,
  '5xl': 64,
}

export const newThemeAllowFontScaling: Theme = {
  ...newTheme,
  fontSizes,
  lineHeights,
  spacings: {
    sm: 4 * fontScale,
    md: 8 * fontScale,
    mlg: 12 * fontScale,
    lg: 16 * fontScale,
    'lg+': 20 * fontScale,
    xl: 24 * fontScale,
    '2xl': 32 * fontScale,
    '3xl': 40 * fontScale,
  },
  components: {
    viewTitle: {
      ...newTheme.components.viewTitle,
      fontSize: fontSizes.lg,
      lineHeight: lineHeights.xl,
    },
    button: {
      ...newTheme.components.button,
      largeHeight: 56 * fontScale,
      mediumHeight: 44 * fontScale,
      smallHeight: 32 * fontScale,
      minimalHeight: 24 * fontScale,
    },
  },
}
