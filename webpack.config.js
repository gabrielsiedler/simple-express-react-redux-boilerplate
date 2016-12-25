const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const autoprefixer = require('autoprefixer');

const pack = {
  entry: [
    'whatwg-fetch',
    path.join(__dirname, 'src/app/index.js'),
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].js',
    publicPath: '/public/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/app/index.html',
      inject: 'body',
      filename: 'index.html',
      publicPath: '/public/',
      alwaysWriteToDisk: true,
    }),
    new HtmlWebpackHarddiskPlugin(),
  ],
  module: {
    loaders: [
      {
        name: 'style',
        test: /\.css$/,
        include: /src\/app/,
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'postcss',
        ],
      },
      {
        test: /\.js?$/,
        include: /src\/app/,
        loader: 'babel',
      },
      {
        test: /\.woff(2)?(\?[a-z0-9#=&.]+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.(ttf|eot|svg)(\?[a-z0-9#=&.]+)?$/,
        loader: 'file',
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'url-loader?limit=8192',
      },
    ],
  },
  postcss: [
    autoprefixer,
  ],
};

module.exports = pack;
