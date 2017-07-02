import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ fluid, className, children }) => (
  <div className={`${fluid ? 'container-fluid' : 'container'} ${className || ''}`}>
    {children}
  </div>
);

Container.propTypes = {
  fluid: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Container;
