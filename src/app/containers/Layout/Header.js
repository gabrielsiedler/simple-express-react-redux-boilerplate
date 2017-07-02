import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import logoImage from '../../assets/img/logo.png';

import {
  Brand,
  Container,
  Navbar,
} from '../../components/ui';

const Header = ({ location }) => {
  const activeRoute = location.pathname;

  const active = current => (activeRoute === current ? 'active' : '');

  return (
    <Navbar>
      <Container fluid>
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#collapse-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <Brand to="/">
            <img alt="Logo" src={logoImage} role="presentation" />
          </Brand>
        </div>
        <div className="collapse navbar-collapse" id="collapse-menu">
          <ul className="nav navbar-nav">
            <li className={active('/')}>
              <Link to="/">
                <span
                  className="glyphicon glyphicon-home text-center"
                />
                Home
              </Link>
            </li>
            <li className={active('/about')}>
              <Link to="/about">
                <span
                  className="glyphicon glyphicon-info-sign text-center"
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
