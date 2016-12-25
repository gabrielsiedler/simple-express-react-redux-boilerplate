import React from 'react';
import { Link } from 'react-router';
import style from './Layout.css';

const Header = () => {
  const logo = require('../../assets/img/logo.png');
  return (
    <div className={style.menu}>
      <img src={logo} role="presentation" />
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Header;
