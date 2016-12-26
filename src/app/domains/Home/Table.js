import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import style from './Home.css';
import { fetchData } from './HomeActions';

class ProductTable extends React.Component {
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
        const urlLC = p.url.toLowerCase();
        const authorLC = p.author.toLowerCase();
        const filterLC = filter.toLowerCase();

        const foundInName = nameLC.indexOf(filterLC) !== -1;
        const foundInUrl = urlLC.indexOf(filterLC) !== -1;
        const foundInAuthor = authorLC.indexOf(filterLC) !== -1;

        if (foundInName || foundInUrl || foundInAuthor) {
          rows.push(
            <li key={p.name}>
              {p.author}/<strong>{p.name}</strong> - <a href={p.url}>{p.url}</a>
            </li>,
          );
        }
      });
    }

    return (
      <div>
        <p className="text-right">Total: {rows.length} repositories.</p>
        <ul className={style.ul}> {rows} </ul>
      </div>
    );
  }
}

ProductTable.propTypes = {
  filter: PropTypes.string,
  products: PropTypes.array,
  fetchProducts: PropTypes.func,
};

const mapStateToProps = state => ({ products: state.table.products });

const mapDispatchToProps = {
  fetchProducts: fetchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductTable);
