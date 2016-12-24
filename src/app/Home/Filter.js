import React, { PropTypes } from 'react';

const Filter = ({ filter, onFilter }) => {
  let userInput;

  return (
    <input
      value={filter}
      ref={(node) => { userInput = node; }}
      onChange={() => onFilter(userInput.value)}
    />
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  onFilter: PropTypes.func,
};

module.exports = Filter;
