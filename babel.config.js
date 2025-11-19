const ReactCompilerConfig = {
  target: '19',
  sources: (filename) => {
    const include =
      filename.indexOf('src/') !== -1
      
    return include
  },
}

module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['@react-native/babel-preset'],
    plugins: [
      [
        'react-native-unistyles/plugin',
        {
          root: 'src',
        },
      ],
      ['babel-plugin-react-compiler', ReactCompilerConfig],
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@redux': './src/redux',
            '@assets': './assets',
            '@graphql': './src/graphql',
            '@context': './src/context',
            '@components': './src/components',
            '@constants': './src/constants',
            '@types': './src/types',
            '@enums': './src/enums',
            '@styles': './src/styles',
            '@utils': './src/utils',
            '@modules': './src/modules',
            '@navigation': './src/modules/navigation',
            '@locale': './src/locale',
            '@hooks': './src/hooks',
            '@auth': './src/modules/authentication',
          },
        },
      ],
      'react-native-worklets-core/plugin',
    ],
  }
}

