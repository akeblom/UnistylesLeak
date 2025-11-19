import React, { FC } from 'react'
import { ViewStyle } from 'react-native'
import { SvgXml } from 'react-native-svg'

type IconProps = {
  iconStyle: ViewStyle
  size?: number
}

const LowRes: FC<IconProps> = ({ iconStyle, size }) => {
  const xml = `
    <svg width="${size ?? 24}" height="${size ?? 24}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="12" fill="#F9A4D8"/>
        <path d="M10.7998 7.2C10.7998 6.53726 11.3371 6 11.9998 6C12.6625 6 13.1998 6.53726 13.1998 7.2V12C13.1998 12.6627 12.6625 13.2 11.9998 13.2C11.3371 13.2 10.7998 12.6627 10.7998 12L10.7998 7.2Z" fill="#300704"/>
        <circle cx="11.9998" cy="16.8" r="1.2" fill="#300704"/>
    </svg>
  `

  return <SvgXml xml={xml} style={iconStyle} />
}

export default LowRes
