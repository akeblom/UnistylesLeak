import { ViewStyle } from 'react-native'

type Shadow = Pick<
  ViewStyle,
  'elevation' | 'shadowOffset' | 'shadowColor' | 'shadowRadius' | 'borderStyle' | 'shadowOpacity' | 'marginHorizontal' | 'marginTop'
>

export type Shadows = {
  soft: Shadow
  elevation: Shadow
  bookPreview: Shadow
}
