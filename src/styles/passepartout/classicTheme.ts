import { PixelRatio, Platform } from 'react-native'
import { Colors } from '@styles/Colors'
import { primitiveColors } from './newTheme'
import { BorderRadiuses } from './types/borderRadiuses'
import { SemanticPalette } from './types/colors'
import { Shadows } from './types/shadows'
import { Theme } from './types/theme'
import { FontSizes, PrimitiveFonts } from './types/typography'

const primitiveFonts: PrimitiveFonts = {
  sansLight: Platform.OS === 'ios' ? 'Fix-iOS-NotoSans-Light' : 'NotoSans-Light',
  sansRegular: 'NotoSans-Regular',
  sansMedium: 'NotoSans-Medium',
  sansSemiBold: 'NotoSans-SemiBold',
  sansBold: 'NotoSans-ExtraBold',
  display: 'AbrilFatface-Regular',
  handwritten: 'Caveat-Regular',
}

const semanticColors: SemanticPalette = {
  background: {
    brand: Colors.chanterelle1,
    primary: Colors.lichen4,
    secondary: Colors.lichen4,
    tertiary: Colors.lichen3,
    quaternary: Colors.lichen2,
    interactivePrimary: Colors.ore0,
    interactiveSecondary: Colors.lichen3,
    interactiveDisabled: Colors.ore3,
    interactiveHero: Colors.chanterelle1,
    overlayLight: Colors.overlay,
    overlayDark: Colors.modalBackground,
  },
  text: {
    primary: Colors.ore0,
    secondary: Colors.ore1,
    tertiary: Colors.ore1,
    interactivePrimary: Colors.lichen4,
    interactiveSecondary: Colors.ore0,
    interactiveDisabled: Colors.iron0,
    interactiveLink: Colors.river1,
  },
  stroke: {
    primary: Colors.ore0,
    secondary: Colors.ore3,
    tertiary: Colors.ore3,
  },
  status: {
    conflict: Colors.error,
    success: Colors.moss2,
    information: Colors.blueberry2,
    attention: Colors.blueberry3,
  },
}

const borderRadiuses: BorderRadiuses = {
  sm: 4,
  md: 8,
  lg: 16,
  full: 9999,
  input: 4,
  button: 9999,
  card: 8,
}

const fontScale = PixelRatio.getFontScale()

const fontSizes: FontSizes = {
  detail: 12,
  sm: 12,
  md: 14,
  lg: 16,
  xl: 18,
  '2xl': 23,
  '3xl': 29,
  '4xl': 38,
  '5xl': 48,
}

const shadows: Shadows = {
  bookPreview: {
    elevation: 2,
    shadowColor: primitiveColors.almostBlack,
    shadowOpacity: 0.4,
    shadowRadius: 2,
    shadowOffset: { height: 1, width: 0 },
  },
  elevation: {
    shadowColor: Colors.ore0,
    elevation: 4,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
  },
  soft: {
    shadowColor: 'rgba(0,0,0,0.15)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
}

const lineHeights = {
  detail: 17,
  sm: 16,
  md: 20,
  lg: 22,
  xl: 24,
  '2xl': 28,
  '3xl': 36,
  '4xl': 44,
  '5xl': 52,
}

export const classicTheme: Theme = {
  brand: {
    colors: primitiveColors,
  },
  fonts: {
    body: primitiveFonts.sansLight,
    bodyLight: primitiveFonts.sansLight,
    bodyRegular: primitiveFonts.sansRegular,
    bodyMedium: primitiveFonts.sansMedium,
    bodySemiBold: primitiveFonts.sansSemiBold,
    bodyBold: primitiveFonts.sansBold,
    heading: primitiveFonts.sansBold,
    headingHero: primitiveFonts.sansBold,
    accent: primitiveFonts.handwritten,
    input: primitiveFonts.sansSemiBold,
    inputPlaceholder: primitiveFonts.sansLight,
  },
  colors: semanticColors,
  fontSizes: fontSizes,
  shadows,
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
  borderRadiuses: borderRadiuses,
  components: {
    viewTitle: {
      fontFamily: primitiveFonts.sansMedium,
      fontSize: fontSizes.xl,
      lineHeight: lineHeights.xl,
    },
    button: {
      fontFamily: primitiveFonts.sansSemiBold,
      largeHeight: 48,
      mediumHeight: 40,
      smallHeight: 32,
      minimalHeight: 24,
    },
  },
}
