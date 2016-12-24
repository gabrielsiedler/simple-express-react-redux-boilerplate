import React from 'react';
import { Route, IndexRoute } from 'react-router';
import About from './About/About';
import Layout from './Layout/Layout';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home} />
    <Route path="/about" component={About} />
    <Route path="*" component={NotFound} />
  </Route>
);
