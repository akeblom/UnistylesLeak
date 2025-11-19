import React, { FC } from 'react'
import { ViewStyle } from 'react-native'
import { SvgXml } from 'react-native-svg'

type IconProps = {
  iconStyle: ViewStyle
}

// todo MFB-17730: Settings - Improve Filter icon implementation
const Filter: FC<IconProps> = ({ iconStyle }) => {
  const iconStyleColor = iconStyle as unknown as { color: string }[]

  const xml = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 6H19M5 12H19" stroke="${iconStyleColor?.[0]?.color || '#222222'}" stroke-width="2" stroke-linecap="round"/>
    <circle cx="9" cy="6" r="2" fill="${iconStyleColor?.[0]?.color ? 'black' : 'white'}" stroke="${iconStyleColor?.[0]?.color || '#222222'}" stroke-width="2"/>
    <path d="M5 12H19M5 18H19" stroke="${iconStyleColor?.[0]?.color || '#222222'}" stroke-width="2" stroke-linecap="round"/>
    <circle cx="15" cy="12" r="2" fill="${iconStyleColor?.[0]?.color ? 'black' : 'white'}" stroke="${iconStyleColor?.[0]?.color || '#222222'}" stroke-width="2"/>
    <circle cx="11" cy="18" r="2" fill="${iconStyleColor?.[0]?.color ? 'black' : 'white'}" stroke="${iconStyleColor?.[0]?.color || '#222222'}" stroke-width="2"/>
  </svg>
`

  return <SvgXml xml={xml} style={iconStyle} />
}

export default Filter
