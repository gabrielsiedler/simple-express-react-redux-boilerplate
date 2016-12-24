const compression = require('compression');
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
const webpackConfig = require('./webpack.development.config');

const compiler = webpack(webpackConfig);

app.use(compression());
app.use(favicon(path.join(__dirname, 'favicon.ico')));

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  console.log('Development environment. Using webpack-dev-middleware.');
  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    historyApiFallback: true,
    quiet: false,
    noInfo: false,
    stats: {
      assets: false,
      colors: true,
      version: false,
      hash: false,
      timings: false,
      chunks: false,
      chunkModules: false,
    },
  }));

  app.use(webpackHotMiddleware(compiler));
}

app.use('/static', express.static(path.join(__dirname, 'dist')));
app.use('/api', require('./src/server/api'));

app.use('/', () => {
  express.static(path.join(__dirname, 'dist'));
});

module.exports = app;
