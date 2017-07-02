import React from 'react';
import { Route, IndexRoute } from 'react-router';
import About from './containers/About/About';
import Layout from './containers/Layout/Layout';
import Home from './containers/Home/Home';
import NotFound from './containers/NotFound/NotFound';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home} />
    <Route path="/about" component={About} />
    <Route path="*" component={NotFound} />
  </Route>
);
