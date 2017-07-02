import React from 'react';
import PropTypes from 'prop-types';

import logoImage from '../../assets/img/logo.png';

import {
  Brand,
  Container,
  MenuLink,
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
          <MenuLink className="navbar-brand" to="/">
            <Brand alt="Logo" src={logoImage} role="presentation" />
          </MenuLink>
        </div>
        <div className="collapse navbar-collapse" id="collapse-menu">
          <ul className="nav navbar-nav">
            <li className={active('/')}>
              <MenuLink to="/">
                <span
                  className="glyphicon glyphicon-home text-center"
                />
                Home
              </MenuLink>
            </li>
            <li className={active('/about')}>
              <MenuLink to="/about">
                <span
                  className="glyphicon glyphicon-info-sign text-center"
                />
                About
              </MenuLink>
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
