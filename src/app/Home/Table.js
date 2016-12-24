import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { fetchData } from './HomeActions';

class ProductTable extends React.Component {
  static propTypes = {
    filter: PropTypes.string,
    products: PropTypes.array,
  }

  componentDidMount() {
    const { fetchProducts } = this.props;

    fetchProducts();
  }

  render() {
    const { filter, products } = this.props;
    const rows = [];

    if (products) {
      products.forEach((p) => {
        const nameLC = p.name.toLowerCase();
        const filterLC = filter.toLowerCase();

        if (nameLC.indexOf(filterLC) !== -1) {
          rows.push(
            <p key={p.name}>{p.name} = {p.price} </p>,
          );
        }
      });
    }

    return <div> {rows} </div>;
  }
}

const mapStateToProps = state => {
  return { products: state.table.products };
};

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductTable);
