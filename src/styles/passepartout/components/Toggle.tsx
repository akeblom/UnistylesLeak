import { Switch, SwitchProps } from 'react-native'
import { StyleSheet } from 'react-native-unistyles'

interface ToggleProps extends SwitchProps {}
export const Toggle: React.FC<ToggleProps> = ({ value, ...props }) => {
  return (
    <Switch
      {...props}
      trackColor={{ false: styles.stroke.color, true: styles.almostBlack.color }}
      thumbColor={styles.primaryBackground.color}
      value={value}
      ios_backgroundColor={value ? styles.almostBlack.color : styles.stroke.color}
      style={styles.toggle}
    />
  )
}

const styles = StyleSheet.create((theme) => ({
  stroke: {
    color: theme.colors.stroke.secondary,
  },
  green: {
    color: theme.colors.status.success,
  },
  almostBlack: {
    color: theme.brand.colors.almostBlack,
  },
  tertiary: {
    color: theme.colors.stroke.tertiary,
  },
  primaryBackground: {
    color: theme.colors.background.primary,
  },
  toggle: {
    transform: [{ scale: 1 }],
  },
}))
