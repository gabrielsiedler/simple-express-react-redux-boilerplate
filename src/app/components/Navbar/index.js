import React from 'react';
import { Link } from 'react-router';
import style from './Navbar.css';

const Navbar = () =>
  <div>
    <div className={style.menu}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  </div>;

export default Navbar;
