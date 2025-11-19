export type PrimitiveFonts = {
  sansLight: string
  sansRegular: string
  sansMedium: string
  sansSemiBold: string
  sansBold: string
  handwritten: string
  display: string
}

export type SemanticFonts = {
  body: string
  bodyLight: string
  bodyRegular: string
  bodyMedium: string
  bodySemiBold: string
  bodyBold: string
  heading: string
  headingHero: string
  accent: string
  input: string
  inputPlaceholder: string
}

export type Font = keyof PrimitiveFonts | keyof SemanticFonts

export type FontSizes = {
  detail: number
  sm: number
  md: number
  lg: number
  xl: number
  '2xl': number
  '3xl': number
  '4xl': number
  '5xl': number
}

export type FontSize = keyof FontSizes

export type LineHeights = FontSizes

export type LineHeight = keyof LineHeights
