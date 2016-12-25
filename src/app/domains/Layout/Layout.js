import React, { PropTypes } from 'react';
import Header from './Header';

const App = ({ children, location }) =>
  <div>
    <Header location={location} />
    { children }
  </div>;

App.propTypes = {
  children: PropTypes.object,
  location: PropTypes.object,
};

export default App;
