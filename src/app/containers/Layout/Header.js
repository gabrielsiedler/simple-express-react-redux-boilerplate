import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import style from './Layout.css';
import logoImage from '../../assets/img/logo.png';

import {
  Navbar,
  Container,
} from '../../components';

const Header = ({ location }) => {
  const activeRoute = location.pathname;

  const active = current => (activeRoute === current ? 'active' : '');

  return (
    <Navbar>
      <Container fluid>
        <div className="navbar-header">
          <button
            type="button"
            className={`navbar-toggle collapsed ${style.collapseBtn}`}
            data-toggle="collapse"
            data-target="#collapse-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <Link className={`navbar-brand ${style.brand}`} to="/">
            <img alt="Logo" src={logoImage} role="presentation" />
          </Link>
        </div>
        <div className="collapse navbar-collapse" id="collapse-menu">
          <ul className={`nav navbar-nav ${style.nav}`}>
            <li className={active('/')}>
              <Link className={style.link} to="/">
                <span
                  className={`glyphicon glyphicon-home text-center ${style.icon}`}
                />
                Home
              </Link>
            </li>
            <li className={active('/about')}>
              <Link className={style.link} to="/about">
                <span
                  className={`glyphicon glyphicon-info-sign text-center ${style.icon}`}
                />
                About
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </Navbar>
  );
};

Header.propTypes = {
  location: PropTypes.object,
};

export default Header;
