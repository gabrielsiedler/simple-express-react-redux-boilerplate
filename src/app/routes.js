import React from 'react';
import { Route, IndexRoute } from 'react-router';
import About from './components/About';
import Container from './components/Container';
import FilterableTable from './components/FilterableTable';

export default (
  <Route path="/" component={Container}>
    <IndexRoute component={FilterableTable} />
    <Route path="/about" component={About} />
  </Route>
);
