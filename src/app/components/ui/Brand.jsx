import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const base = props => <Link className={`navbar-brand ${props.className || ''}`} {...props} />;

base.propTypes = {
  className: PropTypes.string,
};

const Brand = styled(base)`
  height: 80px;

  img {
    height: 50px;
  }
`;

export default Brand;
