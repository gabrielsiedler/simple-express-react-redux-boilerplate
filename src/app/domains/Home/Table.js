import React from 'react';
import PropTypes from 'prop-types';

import style from './Home.css';

const RepositoryTable = ({ filter, loading, repositories }) => {
  const rows = [];

  if (loading) {
    return <div className={`${style.gif} glyphicon glyphicon-refresh spinning`} />;
  }

  repositories.forEach((p) => {
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

  return (
    <div>
      <p className="text-right">Total: {rows.length} repositories.</p>
      <ul className={style.ul}> {rows} </ul>
    </div>
  );
};

RepositoryTable.propTypes = {
  filter: PropTypes.string,
  repositories: PropTypes.array,
  loading: PropTypes.bool,
};

export default RepositoryTable;
