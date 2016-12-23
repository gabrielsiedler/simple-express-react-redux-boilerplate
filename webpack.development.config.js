const webpack = require('webpack');

const pack = require('./webpack.config');

pack.entry.unshift('react-hot-loader/patch');
pack.entry.unshift('webpack/hot/dev-server');
pack.entry.unshift('webpack-dev-server/client?http://localhost:3000');

pack.plugins.push(new webpack.HotModuleReplacementPlugin());
pack.plugins.push(new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('development'),
}));

module.exports = pack;
