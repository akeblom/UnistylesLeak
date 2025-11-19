import React from 'react'
import { SvgXml } from 'react-native-svg'

const ImageCaption = (props) => {
  const xml = `
  <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.004 28a1 1 0 0 1 0 2h-10a1 1 0 0 1 0-2h10zm6-4a1 1 0 0 1 0 2h-16a1 1 0 0 1 0-2h16zm0-14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h16zm-1 2h-14v8h4.584l4.709-4.707a1 1 0 0 1 1.371-.04l3.336 2.964V12zm-3.96 5.374L20.418 20h5.58l-2.954-2.626zM16.504 14a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" fill="#222" fill-rule="nonzero"/>
  </svg>
  `

  return <SvgXml xml={xml} style={props.iconStyle} />
}

export default ImageCaption
