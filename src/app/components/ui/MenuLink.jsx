import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const base = props => (
  <Link {...props}>
    {props.children}
  </Link>
);

base.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

const MenuLink = styled(base)`
  min-width: 80px;
  text-align: center;
  height: 80px;

  > span {
    margin: 0 auto 5px;
    display: block;
    font-size: 25px;
  }
`;

export default MenuLink;
