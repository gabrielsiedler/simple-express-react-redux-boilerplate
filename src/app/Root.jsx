import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Route, BrowserRouter as Router, withRouter } from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import routes from './routes';
import theme from './theme';

const LayoutWithRouter = withRouter(props => <Layout {...props} />);

export default function Root({ store }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <LayoutWithRouter>
            {routes.map(route =>
              (<Route
                key={route.path}
                exact={route.exact}
                path={route.path}
                component={route.component}
              />),
            )}
          </LayoutWithRouter>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
};
