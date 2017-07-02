import React from 'react';
import PropTypes from 'prop-types';

const CollapseNavbar = ({ className, children, visible }) => (
  <div className={`navbar-collapse ${visible ? '' : 'collapse'} ${className || ''}`}>
    {children}
  </div>
);

CollapseNavbar.propTypes = {
  className: PropTypes.string,
  visible: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default CollapseNavbar;
