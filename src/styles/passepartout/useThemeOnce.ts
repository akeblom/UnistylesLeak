import { useMemo } from 'react'
import { UnistylesRuntime, UnistylesThemes } from 'react-native-unistyles'
import { Theme } from './types/theme'

/**
 *
 * @param name - name of the theme to be used
 * @returns the theme object
 * @example
 * const theme = useThemeOnce('classic')
 * const theme = useThemeOnce('juiced')
 *
 */
export function useThemeOnce<T extends keyof UnistylesThemes>(name: T) {
  return useMemo(() => UnistylesRuntime.getTheme(name), [name]) as Theme
}
