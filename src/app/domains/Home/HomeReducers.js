import types from '../../constants';

const initialState = {
  filter: '',
  products: [],
};

const HomeReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    case types.FETCH:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default HomeReducers;
