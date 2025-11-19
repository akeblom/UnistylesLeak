export const Colors = {
  // Malm
  ore0: '#222222',
  ore1: '#565656',
  ore2: '#A4A4A4',
  ore3: '#E6E6E6',
  ore4: '#F9F9F9',

  // Lav
  lichen0: '#605950',
  lichen1: '#A59B8F',
  lichen2: '#D3CCC4',
  lichen3: '#EDEAE6',
  lichen4: '#F9F8F6',

  // Kantarell
  chanterelle0: '#EDC740',
  chanterelle1: '#F3D877',
  chanterelle2: '#FAE7A2',
  chanterelle3: '#FDF4D4',
  chanterelle4: '#FEFBF1',

  // Hjortron
  cloudberry0: '#D79149',
  cloudberry1: '#E2A76C',
  cloudberry2: '#ECC296',
  cloudberry3: '#F6E4D2',
  cloudberry4: '#FBF4ED',

  // Ljung
  heather0: '#BC6565',
  heather1: '#D49393',
  heather2: '#E1B3B3',
  heather3: '#F0D5D6',
  heather4: '#F9F1F1',

  // Blåbär
  blueberry0: '#5B436C',
  blueberry1: '#826C92',
  blueberry2: '#B7A9C1',
  blueberry3: '#D9D2DE',
  blueberry4: '#F0EDF2',

  // Älv
  river0: '#34648C',
  river1: '#6493BA',
  river2: '#99B5CD',
  river3: '#CDDAE6',
  river4: '#EFF3F8',

  // Mossa
  moss0: '#437958',
  moss1: '#76A387',
  moss2: '#A5C7B1',
  moss3: '#CDE0D5',
  moss4: '#EDF4EF',

  // Iron
  iron0: '#8A8A8A',

  // Special
  black: '#000000',
  white: '#FFFFFF',
  specialHeather: '#b40b0b',
  error: '#b40b0b', // specialHeather
  change: '#D79149', // Cloudberry 1
  facebook: '#1877F2',
  christmas: '#BC6565',
  disabled: '#C5C5C3',
  modalBackground: 'rgba(60, 60, 60, 0.6)',
  overlay: 'rgba(255, 255, 255, 0.9)',
  imageOverlay: 'rgba(255, 255, 255, 0.6)',
} as const

type ColorKeys = typeof Colors
export type ColorValue = ColorKeys[keyof ColorKeys]

export const TextColors = {
  text: Colors.ore0,
  heading: Colors.ore0,
  subtle: Colors.ore1,
  placeholder: Colors.ore1,
  light: Colors.white,
} as const

export type Color = keyof typeof Colors

export const hex2rgba = (hex, alpha = 1) => {
  const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16))
  return `rgba(${r},${g},${b},${alpha})`
}
