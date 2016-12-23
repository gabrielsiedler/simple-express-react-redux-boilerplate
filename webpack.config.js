const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

const pack = {
  entry: [
    path.join(__dirname, 'src/app/index.js'),
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/app/index.html',
      inject: 'body',
      filename: 'index.html',
    }),
  ],
  module: {
    loaders: [
      {
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
    ],
  },
  postcss: [
    autoprefixer,
  ],
};

module.exports = pack;
