import types from '../constants';

const HomeReducers = (state = '', action) => {
  switch (action.type) {
    case types.FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default HomeReducers;
