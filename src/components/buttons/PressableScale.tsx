import React, { FC } from 'react'
import { Animated, Pressable, PressableProps, StyleProp, View, ViewStyle, useAnimatedValue } from 'react-native'

export type PressableScaleProps = Omit<PressableProps, 'style'> & {
  style?: StyleProp<ViewStyle>
  activeScale?: number
  contentContainerStyle?: StyleProp<ViewStyle>
}

export const PressableScale: FC<PressableScaleProps> = ({ onPress, children, style, activeScale = 0.96, contentContainerStyle, ...props }) => {
  const scaleValue = useAnimatedValue(1)

  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: activeScale,
      useNativeDriver: true,
    }).start()
  }

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 5,
      useNativeDriver: true,
    }).start()
  }

  return (
    <View style={style}>
      <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
        <Pressable style={contentContainerStyle} {...props} onPressIn={handlePressIn} onPressOut={handlePressOut} onPress={onPress}>
          {children}
        </Pressable>
      </Animated.View>
    </View>
  )
}
