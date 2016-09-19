var webpack = require('webpack');
var path = require('path');

module.exports = {
  cache: true,
  entry: {
    react: './src/index',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      // required to write 'require('./style.css')'
      { test: /\.css$/, loader: 'style-loader!css-loader' },

      // required for react jsx
      { test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel'] },
    ],
  },
};
