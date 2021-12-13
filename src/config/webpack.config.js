const path = require('path');

module.exports = {
    style: [
        path.join(__dirname, 'app', 'Map.css'),
        path.resolve(__dirname, 'node_modules/leaflet/dist/leaflet.css')
     ],
    module: {
        loaders: [
         {test: /\.(png|jpg)$/, loader: "file-loader?name=images/[name].[ext]"}
      ]
      }
}