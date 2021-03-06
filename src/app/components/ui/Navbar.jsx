import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const base = ({ className, children }) => (
  <nav className={`navbar navbar-inverse ${className || ''}`}>
    {children}
  </nav>
);

base.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

const Navbar = styled(base)`
  background-color: #333;
  border: 0;
  border-radius: 0;

  .collapseBtn {
    padding-top: 25px;
  }

  @media (min-width: ${props => props.theme.screen.in}) {
    .nav {
      margin-left: 30px;
    }
  }
`;

export default Navbar;
