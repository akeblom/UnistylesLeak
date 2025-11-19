import React from 'react'
import { View } from 'react-native'
import { StyleSheet, UnistylesVariants } from 'react-native-unistyles'
import { mapVariants } from '@styles/passepartout/utils'

type SpaceProps = UnistylesVariants<typeof styles>

export const Space: React.FC<SpaceProps & { flex?: boolean }> = (props) => {
  styles.useVariants(props)
  if (props.flex) return <View style={styles.flex} />
  return <View style={styles.spacer} />
}

const styles = StyleSheet.create((theme) => {
  const widthVariants = mapVariants(theme.spacings, 'width')
  const heightVariants = mapVariants(theme.spacings, 'height')

  return {
    flex: {
      flex: 1,
    },
    spacer: {
      variants: {
        width: widthVariants,
        height: heightVariants,
      },
    },
  }
})
