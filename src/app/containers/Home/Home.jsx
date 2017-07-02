import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { filterTable, fetchData } from './HomeActions';
import Filter from './Filter';
import Table from './Table';

class Home extends React.Component {
  componentDidMount() {
    const { fetchRepositories } = this.props;

    fetchRepositories();
  }

  render() {
    const { filter, onFilter, loading, repositories } = this.props;

    return (
      <div>
        <h2>Search for repositories:</h2>
        <Filter filter={filter} onFilter={onFilter} loading={loading} />
        <Table filter={filter} loading={loading} repositories={repositories} />
      </div>
    );
  }
}

Home.propTypes = {
  filter: PropTypes.string,
  loading: PropTypes.bool,
  repositories: PropTypes.array,
  onFilter: PropTypes.func,
  fetchRepositories: PropTypes.func,
};

const mapStateToProps = state => ({
  filter: state.home.filter,
  repositories: state.home.repositories.data,
  loading: state.home.repositories.loading,
});

const mapDispatchToProps = {
  onFilter: filterTable,
  fetchRepositories: fetchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
