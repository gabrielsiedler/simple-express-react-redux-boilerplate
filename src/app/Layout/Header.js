import React from 'react';
import { Link } from 'react-router';
import style from './Layout.css';

const Header = () =>
  <div className={style.menu}>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </div>;

export default Header;
