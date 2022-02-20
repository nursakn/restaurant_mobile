const path = require('path');
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        extensions: [
          '.js',
          '.ts',
          '.ios.js',
          '.ios.ts',
          '.android.js',
          '.android.ts',
          '.json',
          '.tsx',
        ],
        alias: {
          atoms: path.resolve(__dirname, './src/components/atoms'),
          molecules: path.resolve(__dirname, './src/components/molecules'),
          organisms: path.resolve(__dirname, './src/components/organisms'),
          templates: path.resolve(__dirname, './src/components/templates'),
          modules: path.resolve(__dirname, './src/modules/index.ts'),
          repositories: path.resolve(__dirname, './src/repositories'),
          services: path.resolve(__dirname, './src/services'),
          store: path.resolve(__dirname, './src/store'),
          nav: path.resolve(__dirname, './src/views/navigation'),
          screens: path.resolve(__dirname, './src/screens'),
        },
      },
    ],
    ['@babel/plugin-proposal-class-properties', {loose: false}],
    'react-native-reanimated/plugin',
  ],
  assumptions: {
    setPublicClassFields: false,
  },
};
