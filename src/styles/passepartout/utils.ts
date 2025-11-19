export function mapVariants<T extends Record<string, string | number>, K extends keyof T>(
  object: T,
  styleKey: string,
  defaultValue?: string | number
): { [P in K | 'default']: { [key in typeof styleKey]: string | number } } {
  const entries = Object.entries(object).map(([key, value]) => [key, { [styleKey]: value }])

  if (defaultValue !== undefined) {
    entries.push(['default', { [styleKey]: defaultValue }])
  }

  return Object.fromEntries(entries) as {
    [P in K | 'default']: { [key in typeof styleKey]: string | number }
  }
}
