import React from 'react';
import { Route, IndexRoute } from 'react-router';
import About from './domains/About/About';
import Layout from './domains/Layout/Layout';
import Home from './domains/Home/Home';
import NotFound from './domains/NotFound/NotFound';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home} />
    <Route path="/about" component={About} />
    <Route path="*" component={NotFound} />
  </Route>
);
