import React, { Fragment, createContext, useContext } from 'react'
import { Platform, View, ViewProps } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import { StyleSheet, UnistylesVariants } from 'react-native-unistyles'
import { PrimitivePalette } from '@styles/passepartout/types/colors'
import { mapVariants } from '@styles/passepartout/utils'

type StylesheetType = UnistylesVariants<typeof styles>
export type CornerBoxProps = ViewProps &
  StylesheetType & {
    contentStyle?: ViewProps['style']
  } & {
    dynamicBackground?: string
  }

interface CornerCutProps {
  dynamicBackground?: string
}

export const CornerCut: React.FC<CornerCutProps> = ({ dynamicBackground }) => {
  const context = useContext(BoxContext)
  styles.useVariants(context)

  return (
    <View style={{ flexDirection: 'row' }}>
      <View style={[styles.triangleContainer, dynamicBackground ? { borderBottomColor: dynamicBackground } : null]} />
      <View style={[styles.triangleBox, dynamicBackground ? { backgroundColor: dynamicBackground } : null]} />
    </View>
  )
}

const BoxContext = createContext<StylesheetType>({})

export const Box: React.FC<CornerBoxProps> & { Corner: React.FC<CornerProps> } = ({
  children,
  background = 'brand',
  style,
  padding = 'lg',
  cornerCut,
  contentStyle,
  dynamicBackground,
  ...props
}) => {
  styles.useVariants({ background, padding, cornerCut })
  const context = { background, padding, cornerCut }
  const cutHeight = styles.backgroundContainer.top

  return (
    <BoxContext value={context}>
      <View style={[style, { overflow: 'hidden' }]}>
        {cutHeight ? (
          <Fragment>
            <CornerCut dynamicBackground={dynamicBackground} />
            <View style={[styles.backgroundContainer, styles.background, dynamicBackground ? { backgroundColor: dynamicBackground } : null]} />
          </Fragment>
        ) : null}

        <View style={[styles.content(cutHeight), contentStyle, cutHeight ? null : styles.background]} {...props}>
          {children}
        </View>
      </View>
    </BoxContext>
  )
}

type CornerProps = ViewProps &
  UnistylesVariants<typeof cornerStyleSheet> & {
    color: keyof PrimitivePalette
  }

export const Corner: React.FC<CornerProps> = ({ style, color, position, size = 'md', ...props }) => {
  const context = useContext(BoxContext)
  cornerStyleSheet.useVariants({ position, size, color })
  const cornerStyle = cornerStyleSheet.triangleContainer(context.padding)

  return (
    <View style={[cornerStyle, { backgroundColor: 'transparent' }, style]} {...props}>
      <Svg width="100%" height="100%" viewBox="0 0 131 131" preserveAspectRatio="none">
        <Path d="M0 131V0H131L0 131Z" fill={cornerStyle.backgroundColor} />
      </Svg>
    </View>
  )
}

Box.Corner = Corner

const cornerStyleSheet = StyleSheet.create((theme) => {
  const colorVariants = mapVariants(theme.brand.colors, 'backgroundColor', 'transparent')
  return {
    triangleContainer: (wrapperPadding: StylesheetType['padding']) => ({
      aspectRatio: 1,
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderStyle: 'solid',
      borderRightColor: 'transparent',
      position: 'absolute',
      variants: {
        color: colorVariants,
        size: {
          sm: {
            width: '25%',
          },
          md: {
            width: '40%',
          },
          lg: {
            width: '60%',
          },
          xl: {
            width: '80%',
          },
          '2xl': {
            height: '54%',
          },
        },
        position: {
          absolutTop: {
            top: -theme.spacings[wrapperPadding],
            left: -theme.spacings[wrapperPadding],
          },
          absolutBottom: {
            bottom: -theme.spacings[wrapperPadding],
            right: -theme.spacings[wrapperPadding],
            transform: [{ rotate: '180deg' }],
          },
          top: {
            top: 0,
            left: 0,
          },
          bottom: {
            bottom: 0,
            right: 0,
            transform: [{ rotate: '180deg' }],
          },
        },
      },
    }),
  }
})

const styles = StyleSheet.create((theme) => {
  const backgrounds = { ...theme.colors.background, ...theme.brand.colors, ...theme.colors.status }
  return {
    backgroundContainer: {
      bottom: 0,
      left: 0,
      position: 'absolute',
      right: 0,
      top: 0,
      variants: {
        background: {},
        padding: {
          md: {},
          lg: {},
        },
        cornerCut: {
          md: {
            // Some android devices make a cut in the corner, small offset (0.2) fixes that...
            top: theme.spacings.xl - (Platform.OS === 'android' ? 0.2 : 0),
          },
          lg: {
            // Some android devices make a cut in the corner, small offset (0.2) fixes that...
            top: theme.spacings['2xl'] - (Platform.OS === 'android' ? 0.2 : 0),
          },
        },
      },
    },

    background: {
      variants: {
        padding: {
          md: {},
          lg: {},
        },
        cornerCut: {
          md: {},
          lg: {},
        },
        background: mapVariants(backgrounds, 'backgroundColor'),
      },
    },

    content: (cornerCut: number) => ({
      zIndex: 2,
      variants: {
        background: {},
        cornerCut: {},
        padding: {
          md: {
            paddingHorizontal: theme.spacings.lg,
            paddingVertical: theme.spacings.md,
            marginTop: cornerCut > 0 ? -cornerCut : 0,
          },
          lg: {
            paddingHorizontal: theme.spacings.xl,
            paddingVertical: theme.spacings.lg,
            marginTop: cornerCut > 0 ? -cornerCut : 0,
          },
        },
      },
    }),

    triangleBox: {
      flex: 1,
      variants: {
        padding: {},
        cornerCut: {},
        background: mapVariants(backgrounds, 'backgroundColor'),
      },
    },

    triangleContainer: {
      height: 0,
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      paddingRight: 2,
      borderStyle: 'solid',
      variants: {
        padding: {},
        background: mapVariants(backgrounds, 'borderBottomColor'),
        cornerCut: {
          md: {
            borderBottomWidth: theme.spacings.xl,
            borderLeftWidth: theme.spacings.xl,
          },
          lg: {
            borderBottomWidth: theme.spacings['2xl'],
            borderLeftWidth: theme.spacings['2xl'],
          },
        },
      },
    },
  }
})
