import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const base = ({ className }) => <div className={`glyphicon glyphicon-refresh ${className}`} />;

base.propTypes = {
  className: PropTypes.string,
};

const Loader = styled(base)`
  animation: spin 1s infinite linear;

  font-size: 50px;
  padding: 50px;
  text-align: center;
  width: 100%;

  @keyframes spin {
    from { transform: scale(1) rotate(0deg); }
    to { transform: scale(1) rotate(360deg); }
  }
`;

export default Loader;
