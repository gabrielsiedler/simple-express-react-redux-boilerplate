import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { filterTable } from './HomeActions';
import Filter from './Filter';
import Table from './Table';
import style from './Home.css';

const Home = ({ filter, onFilter }) => (
  <div className={style.Home}>
    <h2>Search for repositories:</h2>
    <Filter filter={filter} onFilter={onFilter} />
    <Table filter={filter} />
  </div>
);

Home.propTypes = {
  filter: PropTypes.string,
  onFilter: PropTypes.func,
};

const mapStateToProps = state => ({
  filter: state.table.filter,
});

const mapDispatchToProps = {
  onFilter: filterTable,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
