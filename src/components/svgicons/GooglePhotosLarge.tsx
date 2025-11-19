import React from 'react'
import { SvgXml } from 'react-native-svg'

// Used right now int the Google Picker Prototype, too much refactor to change the other one to use size
const GooglePhotosLarge = (props) => {
  const size = props.size
  const xml = `
  <svg version="1.1" width="${size}" height="${size}" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:ns="&#38;ns_sfw;">  
  <g transform="matrix(.051429 0 0 .051429 3 3)">
    <path fill="#FBBB05" d="m87.5 79.5c48.3 0 87.5 39.2 87.5 87.5v8h-167c-4.4 0-8-3.6-8-8 0-48.3 39.2-87.5 87.5-87.5z"/>
    <path  fill="#E94335" d="m270.5 87.5c0 48.3-39.2 87.5-87.5 87.5h-8v-167c0-4.4 3.6-8 8-8 48.3 0 87.5 39.2 87.5 87.5z"/>
    <path  fill="#4285F4" d="m262.5 270.5c-48.3 0-87.5-39.2-87.5-87.5v-8h167c4.4 0 8 3.6 8 8 0 48.3-39.2 87.5-87.5 87.5z"/>
    <path fill="#0F9D58" d="m79.5 262.5c0-48.3 39.2-87.5 87.5-87.5h8v167c0 4.4-3.6 8-8 8-48.3 0-87.5-39.2-87.5-87.5z"/></g>
  </svg>
  
  `

  return <SvgXml xml={xml} style={props.iconStyle} />
}

export default GooglePhotosLarge
