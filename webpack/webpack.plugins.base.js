const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');

module.exports = [
  new webpack.optimize.CommonsChunkPlugin({
    names: ['vendor'],
    minChunks: ({ resource }) => /node_modules/.test(resource),
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'manifest',
  }),
  new HtmlWebpackPlugin({
    template: 'index.ejs',
  }),
  new InlineManifestWebpackPlugin({
    name: 'webpackManifest',
  }),
];
