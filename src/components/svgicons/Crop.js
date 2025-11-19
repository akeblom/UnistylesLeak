import React from 'react'
import { SvgXml } from 'react-native-svg'

const Crop = (props) => {
  const xml = `
  <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.004 8a1 1 0 0 1 1 1v6h7a1 1 0 0 1 1 1v7h6a1 1 0 0 1 .993.883l.007.117a1 1 0 0 1-1 1h-6v6a1 1 0 0 1-2 0v-6h-7a1 1 0 0 1-1-1v-7h-6a1 1 0 0 1-.993-.883L8.004 16a1 1 0 0 1 1-1h6V9a1 1 0 0 1 1-1zm-7 13a1 1 0 0 1 1 1v1a5 5 0 0 0 5 5h.585l-.292-.293a1 1 0 0 1-.083-1.32l.083-.094a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-1.414-1.414l.29-.293h-.583a7 7 0 0 1-7-7v-1a1 1 0 0 1 1-1zm14-4h-6v6h6v-6zm1.707-8.707a1 1 0 0 1 0 1.414l-.293.293h.586a7 7 0 0 1 7 7v1a1 1 0 0 1-2 0v-1a5 5 0 0 0-5-5h-.585l.292.293a1 1 0 0 1 .083 1.32l-.083.094a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 0-1.414l2-2a1 1 0 0 1 1.414 0z" fill="#222" fill-rule="nonzero"/>
  </svg>
  `

  return <SvgXml xml={xml} style={props.iconStyle} />
}

export default Crop
