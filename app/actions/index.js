import * as types from './types';

export default function filterTable(filter) {
  return {
    type: types.FILTER,
    filter,
  };
}
