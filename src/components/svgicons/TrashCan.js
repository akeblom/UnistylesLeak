import React from 'react'
import { SvgXml } from 'react-native-svg'

const TrashCan = (props) => {
  const xml = `
  <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.004 10a1 1 0 0 1 .832.445L24.539 13l2.465.001a1 1 0 0 1 .705.291l1 .996a1 1 0 1 1-1.41 1.417l-.382-.38-.853 12.809a2 2 0 0 1-1.84 1.861l-.156.006H15.94a2 2 0 0 1-1.995-1.867l-.856-12.805-.376.376a1 1 0 0 1-1.32.081l-.095-.083a1 1 0 0 1 .002-1.414l.999-.996a1 1 0 0 1 .706-.292l2.465-.001 1.703-2.554a1 1 0 0 1 .832-.445h4zm2.93 5H15.07l.87 13h8.128l.867-13zm-6.93 3a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0v-5a1 1 0 0 1 1-1zm4 0a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0v-5a1 1 0 0 1 1-1zm-.535-6h-2.93l-.666.999h4.262L21.469 12z" fill="#222" fill-rule="nonzero"/>
  </svg>
  `

  return <SvgXml xml={xml} style={props.iconStyle} />
}

export default TrashCan
