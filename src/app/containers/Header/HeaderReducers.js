import types from '../../constants';

const initialState = {
  mobileVisible: false,
};

const HeaderReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.HEADER_TOGGLE:
      return {
        ...state,
        mobileVisible: !state.mobileVisible,
      };
    default:
      return state;
  }
};

export default HeaderReducers;
