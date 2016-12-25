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
        test: /global\.scss$/,
        include: /src\/app/,
        loaders: [
          'style',
          'css?sourceMap&importLoaders=1',
          'sass',
          'postcss',
        ],
      },
      {
        name: 'style',
        test: /^((?!global).)*\.s?css$/,
        include: /src\/app/,
        loaders: [
          'style?sourceMap',
          'css?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss-loader',
        ],
      },
      {
        test: /\.js?$/,
        include: /src\/app/,
        loader: 'babel',
      },
      {
        test: /\.svg(\?[a-z0-9#=&.]+)?$/,
        loader: 'url?limit=65000&mimetype=image/svg+xml&name=public/fonts/[name].[ext]',
      },
      {
        test: /\.woff(\?[a-z0-9#=&.]+)?$/,
        loader: 'url?limit=65000&mimetype=application/font-woff&name=public/fonts/[name].[ext]',
      },
      {
        test: /\.woff2(\?[a-z0-9#=&.]+)?$/,
        loader: 'url?limit=65000&mimetype=application/font-woff2&name=public/fonts/[name].[ext]',
      },
      {
        test: /\.[ot]tf(\?[a-z0-9#=&.]+)?$/,
        loader: 'url?limit=65000&mimetype=application/octet-stream&name=public/fonts/[name].[ext]',
      },
      {
        test: /\.eot(\?[a-z0-9#=&.]+)?$/,
        loader: 'url?limit=65000&mimetype=application/vnd.ms-fontobject&name=public/fonts/[name].[ext]',
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
