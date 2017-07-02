import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Router } from 'react-router';

import routes from './routes';
import theme from './theme';

export default function Root({ store, history }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router history={history} routes={routes} />
      </ThemeProvider>
    </Provider>
  );
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};
