/* eslint-disable */
var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: ['./src/index.js'],
  devtool: 'source-map',
  output: {
    filename: 'react-kinops-common.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/static/',
    library: 'react-kinops-common',
    libraryTarget: 'umd',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
  ]
};
