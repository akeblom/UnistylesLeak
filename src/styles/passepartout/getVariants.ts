
const getVariantValue = (key: string, value: unknown) => {
  if (typeof value === 'object') {
    return value
  } else {
    return { [key]: value }
  }
}

export const getVariants = (c: Record<string, string | boolean>, variants: Record<string, Record<string, unknown>>) => {
  try {
    const result = {}
    const context = {}

    Object.keys(variants).forEach((key) => {
      context[key] = c[key]
    })

    for (const [key, value] of Object.entries(variants)) {
      if (value && 'default_tmp' in value) {
        Object.assign(result, getVariantValue(key, value['default_tmp']))
      }
    }

    for (const [key, value] of Object.entries(context)) {
      if ((typeof value === 'string' || typeof value === 'boolean') && variants[key]) {
        const variantValue = variants[key][value.toString()]

        if (!variantValue) {
          continue
        }
        Object.assign(result, getVariantValue(key, variantValue))
      }
    }

    return result
  } catch (e) {

    return {}
  }
}
