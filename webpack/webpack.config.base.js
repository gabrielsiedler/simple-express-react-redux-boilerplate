const path = require('path');
const webpackModule = require('./webpack.module');

const isProduction = process.env.NODE_ENV === 'production';
const filename = isProduction ? '[name].[chunkhash].js' : '[name].[hash].js';

console.log(`Compiling to ${path.join(__dirname, '..', 'dist')}...`); // eslint-disable-line no-console

module.exports = {
  context: path.join(__dirname, '..', 'src', 'app'),
  entry: {
    app: './index.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    filename,
    path: path.join(__dirname, '..', '/dist'),
    publicPath: '/',
  },
  module: webpackModule,
  devServer: {
    contentBase: path.join(__dirname, '..', '/'),
    port: 8000,
    hot: true,
    hotOnly: true,
    inline: true,
    host: '0.0.0.0',
    historyApiFallback: true,
    stats: {
      colors: true,
    },
  },
};
