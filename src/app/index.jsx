import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import './assets/style/bootstrap.min.css';

import Reducers from './reducers';

import Root from './Root';

const store = createStore(Reducers, applyMiddleware(thunk));
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Root store={store} history={history} />,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept();
}
