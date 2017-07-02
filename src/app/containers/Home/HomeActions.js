import types from '../../constants';

export function filterTable(filter) {
  return (dispatch) => {
    dispatch({
      type: types.FILTER,
      payload: filter,
    });
  };
}

export function fetchData() {
  return async (dispatch) => {
    dispatch({ type: types.REPOSITORIES_FETCH_START });
    fetch('/api/data', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
      .then(response => response.json())
      .then((data) => {
        dispatch({
          type: types.REPOSITORIES_FETCH_END,
          payload: data.repositories,
        });
      });

    return true;
  };
}
