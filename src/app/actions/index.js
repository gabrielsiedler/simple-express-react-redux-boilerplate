import types from './types';

export function filterTable(filter) {
  return {
    type: types.FILTER,
    filter,
  };
}

export function another() {
  return {};
}
