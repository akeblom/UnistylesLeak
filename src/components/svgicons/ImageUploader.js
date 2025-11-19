import React from 'react'
import { SvgXml } from 'react-native-svg'

const GooglePhotos = (props) => {
  const xml = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="${props.iconStyle.color}" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:v="https://vecta.io/nano" width="24" height="24">
        <defs><path id="A" d="M0 0h24v17H0z"/></defs>
        <g transform="matrix(.9 0 0 .9 .705882 4)" fill-rule="evenodd">
            <mask id="B" fill="#fff"><use xlink:href="#A"/>
            </mask>
            <path d="M17.165 9.23l-.426.466-.966 1.056-1.108 1.212-.09.1-1.016 1.11-.744.777-.402.404c-.085.085-.171.176-.27.25a.257.257 0 0 1-.11.054.213.213 0 0 1-.135-.025c-.133-.07-.229-.197-.328-.297l-.333-.335-1.379-1.464-.896-.981-.991-1.085a635.26 635.26 0 0 1-.805-.88l-.331-.362a.182.182 0 0 1 .008-.26l3.212-2.966c.05-.05.14-.05.19-.002.32.312.739.712 1.156 1.454.259.46.445 1.112.535 1.473.007.03.036.043.066.041s.058-.01.065-.041c.09-.361.273-1.013.532-1.473.418-.742.835-1.142 1.156-1.454a.143.143 0 0 1 .19.002l3.212 2.965a.182.182 0 0 1 .008.26m3.137-1.972a5.072 5.072 0 0 0 .48-2.15 5.11 5.11 0 0 0-10.054-1.293 4.027 4.027 0 0 0-6.367 3.275l.002.039A4.957 4.957 0 0 0 0 12.044 4.96 4.96 0 0 0 4.962 17h14.076A4.959 4.959 0 0 0 24 12.044c0-2.3-1.571-4.228-3.698-4.787"  mask="url(#B)"/>
        </g>
    </svg> 
  `

  return <SvgXml xml={xml} style={props.iconStyle} />
}

export default GooglePhotos
