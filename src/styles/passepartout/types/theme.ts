import { BorderRadiuses } from './borderRadiuses'
import { PrimitivePalette, SemanticPalette } from './colors'
import { Shadows } from './shadows'
import { SpacingSizes } from './spacings'
import { FontSizes, LineHeights, SemanticFonts } from './typography'

export type Theme = {
  brand: {
    colors: PrimitivePalette
  }
  colors: SemanticPalette
  fonts: SemanticFonts
  fontSizes: FontSizes
  lineHeights: LineHeights
  shadows: Shadows
  spacings: SpacingSizes
  borderRadiuses: BorderRadiuses
  components: {
    viewTitle: {
      fontFamily: string
      fontSize: number
      lineHeight: number
    }
    button: {
      fontFamily: string
      largeHeight: number
      mediumHeight: number
      smallHeight: number
      minimalHeight: number
    }
  }
}
