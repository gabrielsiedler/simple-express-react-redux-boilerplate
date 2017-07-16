const webpack = require('webpack');
const basePlugins = require('./webpack.plugins.base.js');

module.exports = [
  ...basePlugins,
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production'),
  }),
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false,
  }),
  new webpack.optimize.UglifyJsPlugin({
    beautify: false,
    mangle: {
      screw_ie8: true,
      keep_fnames: true,
    },
    compress: {
      warnings: false,
      screw_ie8: true,
    },
    comments: false,
  }),
  new webpack.NamedModulesPlugin(),
];
