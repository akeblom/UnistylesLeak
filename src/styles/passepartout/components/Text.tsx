import React from 'react'
import { Text as RNText, TextProps as RNTextProps } from 'react-native'
import { StyleSheet, UnistylesRuntime, UnistylesVariants } from 'react-native-unistyles'
import { mapVariants } from '@styles/passepartout/utils'
import { Brick, BrickProps } from './Brick'

type StylesheetVariants = UnistylesVariants<typeof styles>
export type TextProps = RNTextProps & BrickProps & StylesheetVariants
export type TextComponentColor = StylesheetVariants['color']

export const Text: React.FC<TextProps> = ({
  allowFontScaling,
  children,
  style,
  color,
  font,
  size,
  lineHeight,
  align = 'auto',
  underline,
  ...props
}) => {
  styles.useVariants({ font, color, size, lineHeight: lineHeight || size, align, underline })

  return (
    <Brick
      as={RNText}
      allowFontScaling={UnistylesRuntime.themeName === 'juicedAllowFontScaling' ? allowFontScaling : true}
      style={[styles.text, style]}
      {...props}
    >
      {children}
    </Brick>
  )
}

const styles = StyleSheet.create((theme) => {
  const fontVariants = mapVariants(theme.fonts, 'fontFamily', theme.fonts.body)
  const colorVariants = mapVariants({ ...theme.colors.text, ...theme.colors.status, ...theme.brand.colors }, 'color', theme.colors.text.primary)
  const fontSizes = mapVariants(theme.fontSizes, 'fontSize', theme.fontSizes.md)
  const lineHeights = mapVariants(theme.lineHeights, 'lineHeight', theme.lineHeights.md)

  return {
    text: {
      variants: {
        font: fontVariants,
        color: colorVariants,
        size: fontSizes,
        lineHeight: lineHeights,
        align: {
          auto: { textAlign: 'auto' },
          left: { textAlign: 'left' },
          right: { textAlign: 'right' },
          center: { textAlign: 'center' },
          justify: { textAlign: 'justify' },
        },
        underline: {
          true: {
            textDecorationLine: 'underline',
          },
        },
      },
    },
  }
})
