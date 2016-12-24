import types from '../constants';

export default function filterTable(filter) {
  return {
    type: types.FILTER,
    filter,
  };
}
