import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

const App = ({ children, location }) => (
  <div>
    <Header location={location} />
    <div className="container">
      {children}
    </div>
  </div>
);

App.propTypes = {
  children: PropTypes.object,
  location: PropTypes.object,
};

export default App;
