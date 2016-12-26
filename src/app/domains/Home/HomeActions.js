import types from '../../constants';

export function filterTable(filter) {
  return (dispatch) => {
    console.log('here');
    dispatch({
      type: types.FILTER,
      payload: filter,
    });
  };
}

export function fetchData() {
  return async (dispatch) => {
    fetch('/api/data', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
      .then(response => response.json())
      .then((data) => {
        dispatch({
          type: types.FETCH,
          payload: data.repositories,
        });
      });

    return true;
  };
}
