import { ActivityIndicator as RNActivityIndicator, ActivityIndicatorProps as RNActivityIndicatorProps } from 'react-native'
import { withUnistyles } from 'react-native-unistyles'
import { Theme } from '../types/theme'

type ActivityIndicatorProps = Omit<RNActivityIndicatorProps, 'color'> & {
  color?: keyof Theme['colors']['text']
}

const UniActivityIndicator = withUnistyles(RNActivityIndicator)

export const ActivityIndicator: React.FC<ActivityIndicatorProps> = ({ color = 'primary', ...props }) => {
  return <UniActivityIndicator uniProps={(theme) => ({ color: theme.colors.text[color] })} {...props} />
}
