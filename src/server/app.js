import rootPath from 'app-root-path';
import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import favicon from 'serve-favicon';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import 'babel-polyfill';

import api from './api';

const app = express();
const webpackConfig = rootPath.require('webpack/webpack.config');
const compiler = webpack(webpackConfig);

app.use(
  morgan(
    ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms',
  ),
);
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

  app.use(
    webpackDevMiddleware(compiler, {
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
    }),
  );

  app.use(webpackHotMiddleware(compiler));
}

app.use('/public', express.static(rootPath.resolve('build/public/')));
app.use('/api', api);

app.get('*', (req, res) => {
  res.sendFile(rootPath.resolve('build/public/index.html'));
});

module.exports = app;
