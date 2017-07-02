import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { toggleMenu as toggleMenuAction } from './HeaderActions';
import logoImage from '../../assets/img/logo.png';

import { Brand, Container, MenuLink, Navbar, CollapseNavbar } from '../../components/ui';

const Header = ({ mobileVisible, location, toggleMenu }) => {
  const activeRoute = location.pathname;

  const active = current => (activeRoute === current ? 'active' : '');

  return (
    <Navbar>
      <Container fluid>
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            onClick={() => toggleMenu()}
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
        <CollapseNavbar visible={mobileVisible}>
          <ul className="nav navbar-nav">
            <li className={active('/')}>
              <MenuLink to="/">
                <span className="glyphicon glyphicon-home text-center" />
                Home
              </MenuLink>
            </li>
            <li className={active('/about')}>
              <MenuLink to="/about">
                <span className="glyphicon glyphicon-info-sign text-center" />
                About
              </MenuLink>
            </li>
          </ul>
        </CollapseNavbar>
      </Container>
    </Navbar>
  );
};

Header.propTypes = {
  location: PropTypes.object,
  mobileVisible: PropTypes.bool,
  toggleMenu: PropTypes.func,
};

const mapStateToProps = state => ({
  mobileVisible: state.header.mobileVisible,
});

const mapDispatchToProps = {
  toggleMenu: toggleMenuAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
