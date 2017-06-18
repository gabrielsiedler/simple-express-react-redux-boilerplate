const rootPath = require('app-root-path');
const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const favicon = require('serve-favicon');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
const webpackConfig = rootPath.require('webpack.development.config');

const compiler = webpack(webpackConfig);

app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

app.use(bodyParser.json());

app.use((err, req, res, next) => {
  if (err.status === 400) {
    return res.status(err.status).send({ error: 'Invalid JSON.' });
  }

  return next(err);
});

app.use(compression());
app.use(favicon(rootPath.resolve('favicon.ico')));
app.use(cors());

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  console.log('Development environment. Using webpack-dev-middleware.'); // eslint-disable-line no-console

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

app.use('/public', express.static(rootPath.resolve('dist')));
app.use('/api', require('./api'));

app.get('*', (req, res) => {
  res.sendFile(rootPath.resolve('dist/index.html'));
});

module.exports = app;
