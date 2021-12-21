const { babelInclude, override, addPostcssPlugins } = require('customize-cra');
const path = require('path');

module.exports = {
  webpack: override(
    babelInclude([
      path.resolve('src'),
      path.resolve('node_modules/@react-leaflet'),
      path.resolve('node_modules/react-leaflet')
    ]),
    addPostcssPlugins([
        require('tailwindcss'),
        require('autoprefixer'),
    ]),
  ),
};