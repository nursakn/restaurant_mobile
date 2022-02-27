const path = require('path');
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      '@babel/plugin-transform-flow-strip-types',
      ['@babel/plugin-proposal-class-properties', {loose: false}],
      [
        'babel-plugin-module-resolver',
        {
          root: './src',
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
            components: path.resolve(__dirname, './src/components'),
            atoms: path.resolve(__dirname, './src/components/atoms'),
            molecules: path.resolve(__dirname, './src/components/molecules'),
            organisms: path.resolve(__dirname, './src/components/organisms'),
            templates: path.resolve(__dirname, './src/components/templates'),
            constants: path.resolve(__dirname, './src/constants'),
            store: path.resolve(__dirname, './src/store'),
            navigation: path.resolve(__dirname, './src/navigation'),
            screens: path.resolve(__dirname, './src/screens'),
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
    assumptions: {
      setPublicClassFields: false,
    },
  };
};
