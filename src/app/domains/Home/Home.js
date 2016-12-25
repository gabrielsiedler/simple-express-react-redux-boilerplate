import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { filterTable } from './HomeActions';
import Filter from './Filter';
import Table from './Table';
import style from './Home.css';

const Home = ({ filter, onFilter }) => (
  <div className={style.Home}>
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

const mapDispatchToProps = dispatch => ({
  onFilter: filterText => dispatch(filterTable(filterText)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);
