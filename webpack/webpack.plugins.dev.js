const webpack = require('webpack');
const basePlugins = require('./webpack.plugins.base.js');

module.exports = [
  ...basePlugins,
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin(),
];
