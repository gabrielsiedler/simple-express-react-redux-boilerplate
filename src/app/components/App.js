import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import style from './App.css';

const App = ({ children }) =>
  <div>
    <h1>Filter table</h1>
    { children }
    <footer className={style.footer}>
      <Link to="/">Filterable Table</Link>
      <Link to="/about">About</Link>
    </footer>
  </div>;

App.propTypes = {
  children: PropTypes.object,
};

export default App;
