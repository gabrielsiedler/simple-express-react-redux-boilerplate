import React, { PropTypes } from 'react';

const Filter = ({ filter, onFilter, loading }) => {
  let userInput;

  return (
    <div className="input-group">
      <span className="input-group-addon" id="basic-addon1">
        <span className="glyphicon glyphicon-search" />
      </span>
      <input
        type="text"
        className="form-control"
        value={filter}
        disabled={loading}
        ref={(node) => { userInput = node; }}
        onChange={() => onFilter(userInput.value)}
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  loading: PropTypes.bool,
  onFilter: PropTypes.func,
};

module.exports = Filter;
