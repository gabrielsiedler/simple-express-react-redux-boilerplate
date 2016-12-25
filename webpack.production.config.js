const webpack = require('webpack');
const StatsPlugin = require('stats-webpack-plugin');

const pack = require('./webpack.config');

pack.plugins.push(new webpack.optimize.OccurenceOrderPlugin());
pack.plugins.push(new webpack.optimize.UglifyJsPlugin({
  compressor: {
    warnings: false,
    screw_ie8: true,
  },
}));
pack.plugins.push(new StatsPlugin('webpack.stats.json', {
  source: false,
  modules: false,
}));
pack.plugins.push(new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('production'),
}));

pack.output.filename = '[name]-[hash].js';

module.exports = pack;
