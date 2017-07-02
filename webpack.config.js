const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

const pack = {
  entry: ['whatwg-fetch', path.join(__dirname, 'src/app/index.js')],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].js',
    publicPath: '/public/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
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
    rules: [
      {
        test: /.*\.css$/,
        include: /src\/app/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.jsx?$/,
        include: /src\/app/,
        use: 'babel-loader',
      },
      {
        test: /\.svg(\?[a-z0-9#=&.]+)?$/,
        use: 'url-loader?limit=65000&mimetype=image/svg+xml&name=public/fonts/[name].[ext]',
      },
      {
        test: /\.woff(\?[a-z0-9#=&.]+)?$/,
        loader: 'url-loader?limit=65000&mimetype=application/font-woff&name=public/fonts/[name].[ext]',
      },
      {
        test: /\.woff2(\?[a-z0-9#=&.]+)?$/,
        use: 'url-loader?limit=65000&mimetype=application/font-woff2&name=public/fonts/[name].[ext]',
      },
      {
        test: /\.[ot]tf(\?[a-z0-9#=&.]+)?$/,
        use: 'url-loader?limit=65000&mimetype=application/octet-stream&name=public/fonts/[name].[ext]',
      },
      {
        test: /\.eot(\?[a-z0-9#=&.]+)?$/,
        use: 'url-loader?limit=65000&mimetype=application/vnd.ms-fontobject&name=public/fonts/[name].[ext]',
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: 'url-loader?limit=8192',
      },
    ],
  },
};

module.exports = pack;
