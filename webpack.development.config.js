const webpack = require('webpack');

const pack = require('./webpack.config');

pack.entry.unshift('webpack-hot-middleware/client');

pack.plugins.push(new webpack.HotModuleReplacementPlugin());
pack.plugins.push(new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('development'),
}));

module.exports = pack;
