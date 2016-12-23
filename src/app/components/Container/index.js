import React, { PropTypes } from 'react';
import Navbar from '../Navbar';

const App = ({ children }) =>
  <div>
    <h1>Filter table</h1>
    <Navbar />
    { children }
  </div>;

App.propTypes = {
  children: PropTypes.object,
};

export default App;
