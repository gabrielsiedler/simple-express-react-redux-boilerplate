import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import './assets/style/bootstrap.min.css';

import Reducers from './reducers';

import Root from './Root';

const store = createStore(Reducers, applyMiddleware(thunk));

render(
  <Root store={store} />,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept();
}
