export type ColorValue = string

export type PrimitivePalette = {
  almostWhite: ColorValue
  brokenWhite: ColorValue
  cloudy: ColorValue
  misty: ColorValue
  clayLight: ColorValue
  clay: ColorValue
  almostBlack: ColorValue
  cocoa: ColorValue
  cocoaLight: ColorValue
  onceUponYellow: ColorValue
  seaweedLight: ColorValue
  seaweed: ColorValue
  iglooLight: ColorValue
  igloo: ColorValue
  glaze: ColorValue
  candy: ColorValue
  tomato: ColorValue
  ketchup: ColorValue
  lavender: ColorValue
}

export type SemanticPalette = {
  background: {
    brand: ColorValue
    primary: ColorValue
    secondary: ColorValue
    tertiary: ColorValue
    quaternary: ColorValue
    interactivePrimary: ColorValue
    interactiveSecondary: ColorValue
    interactiveDisabled: ColorValue
    interactiveHero: ColorValue
    overlayLight: ColorValue
    overlayDark: ColorValue
  }
  text: {
    primary: ColorValue
    secondary: ColorValue
    tertiary: ColorValue
    interactivePrimary: ColorValue
    interactiveSecondary: ColorValue
    interactiveDisabled: ColorValue
    interactiveLink: ColorValue
  }
  stroke: {
    primary: ColorValue
    secondary: ColorValue
    tertiary: ColorValue
  }
  status: {
    conflict: ColorValue
    success: ColorValue
    information: ColorValue
    attention: ColorValue
  }
}

export type Color = keyof PrimitivePalette | keyof SemanticPalette
export type TextColor = keyof SemanticPalette['text'] | keyof SemanticPalette['status']
