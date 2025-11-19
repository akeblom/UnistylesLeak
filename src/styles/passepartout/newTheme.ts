import { PixelRatio, Platform } from 'react-native'
import { BorderRadiuses } from './types/borderRadiuses'
import { PrimitivePalette, SemanticPalette } from './types/colors'
import { Shadows } from './types/shadows'
import { Theme } from './types/theme'
import { FontSizes, PrimitiveFonts } from './types/typography'

export const primitiveColors: PrimitivePalette = {
  almostWhite: '#f9f9f9',
  brokenWhite: '#FAF5F2',
  cloudy: '#F2EFED',
  misty: '#EEE9E6',
  clayLight: '#DAD4D4',
  clay: '#8A8383',
  cocoa: '#4E3232',
  cocoaLight: '#706060',
  almostBlack: '#2D0303',
  onceUponYellow: '#FFCC5A',
  seaweedLight: '#E3EDE2',
  seaweed: '#BFDDBC',
  iglooLight: '#DCF0F4',
  igloo: '#A6D8E0',
  glaze: '#316CF5',
  candy: '#F9A4D8',
  tomato: '#C7230A',
  ketchup: '#872B12',
  lavender: '#D2B5F7',
}

export const semanticColors: SemanticPalette = {
  background: {
    brand: primitiveColors.onceUponYellow,
    primary: primitiveColors.almostWhite,
    secondary: primitiveColors.brokenWhite,
    tertiary: primitiveColors.misty,
    quaternary: primitiveColors.cloudy,
    interactivePrimary: primitiveColors.almostBlack,
    interactiveSecondary: primitiveColors.misty,
    interactiveDisabled: primitiveColors.clayLight,
    interactiveHero: primitiveColors.onceUponYellow,
    overlayLight: 'rgba(255, 255, 255, 0.80)',
    overlayDark: 'rgba(0, 0, 0, 0.3)', // visually this looks more like the 0.5 in Figma design
  },
  text: {
    primary: primitiveColors.almostBlack,
    secondary: primitiveColors.cocoa,
    tertiary: primitiveColors.clay,
    interactivePrimary: primitiveColors.almostWhite,
    interactiveSecondary: primitiveColors.almostBlack,
    interactiveDisabled: primitiveColors.cocoa,
    interactiveLink: primitiveColors.glaze,
  },
  stroke: {
    primary: primitiveColors.almostBlack,
    secondary: primitiveColors.clay,
    tertiary: primitiveColors.clayLight,
  },
  status: {
    conflict: primitiveColors.tomato,
    success: primitiveColors.seaweed,
    attention: primitiveColors.candy,
    information: primitiveColors.lavender,
  },
}

const primitiveFonts: PrimitiveFonts = {
  sansLight: 'Poppins-Light',
  sansRegular: 'Poppins-Regular',
  sansMedium: 'Poppins-Medium',
  sansSemiBold: 'Poppins-SemiBold',
  sansBold: 'Poppins-Bold',
  display: 'OnceUpon-Headline',
  handwritten: 'Caveat-Regular',
}

const borderRadiuses: BorderRadiuses = {
  sm: 2,
  md: 4,
  lg: 16,
  full: 9999,
  input: 2,
  button: 9999,
  card: 0,
}
const shadows: Shadows = {
  bookPreview: {
    elevation: 2,
    shadowColor: primitiveColors.almostBlack,
    shadowOpacity: 0.4,
    shadowRadius: 2,
    shadowOffset: { height: 1, width: 0 },
    marginHorizontal: Platform.OS === 'android' ? 2 : 0,
    marginTop: Platform.OS === 'android' ? 2 : 0,
  },
  elevation: {
    shadowColor: primitiveColors.almostBlack,
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

const fontScale = PixelRatio.getFontScale()

const fontSizes: FontSizes = {
  detail: 13 / fontScale,
  sm: 13 / fontScale,
  md: 15 / fontScale,
  lg: 18 / fontScale,
  xl: 22 / fontScale,
  '2xl': 27 / fontScale,
  '3xl': 40 / fontScale,
  '4xl': 48 / fontScale,
  '5xl': 58 / fontScale,
}

const lineHeights = {
  detail: 17 / fontScale,
  sm: 20 / fontScale,
  md: 23 / fontScale,
  lg: 23 / fontScale,
  xl: 29 / fontScale,
  '2xl': 35 / fontScale,
  '3xl': 44 / fontScale,
  '4xl': 55 / fontScale,
  '5xl': 64 / fontScale,
}

export const newTheme: Theme = {
  brand: {
    colors: primitiveColors,
  },
  colors: semanticColors,
  fonts: {
    body: primitiveFonts.sansRegular,
    bodyLight: primitiveFonts.sansLight,
    bodyRegular: primitiveFonts.sansRegular,
    bodyMedium: primitiveFonts.sansMedium,
    bodySemiBold: primitiveFonts.sansSemiBold,
    bodyBold: primitiveFonts.sansSemiBold,
    heading: primitiveFonts.sansSemiBold,
    headingHero: primitiveFonts.display,
    accent: primitiveFonts.handwritten,
    input: primitiveFonts.sansMedium,
    inputPlaceholder: primitiveFonts.sansRegular,
  },
  shadows,
  fontSizes: fontSizes,
  lineHeights,
  spacings: {
    sm: 4,
    md: 8,
    mlg: 12,
    lg: 16,
    'lg+': 20,
    xl: 24,
    '2xl': 32,
    '3xl': 40,
  },
  borderRadiuses: borderRadiuses,
  components: {
    viewTitle: {
      fontFamily: primitiveFonts.sansMedium,
      fontSize: fontSizes.lg,
      lineHeight: lineHeights.xl,
    },
    button: {
      largeHeight: 56,
      mediumHeight: 44,
      smallHeight: 32,
      minimalHeight: 24,
      fontFamily: primitiveFonts.sansMedium,
    },
  },
}
