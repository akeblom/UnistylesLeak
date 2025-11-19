import React from 'react'
import { SvgXml } from 'react-native-svg'

const Phone = (props) => {
  const xml = `
  <svg version="1.1" fill="${props.iconStyle.color}" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="m17 2a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2v-16a2 2 0 0 1 2-2zm0 2h-10v16h10zm-3 13a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2z"/>
  </svg>
  `

  return <SvgXml xml={xml} style={props.iconStyle} />
}

export default Phone
