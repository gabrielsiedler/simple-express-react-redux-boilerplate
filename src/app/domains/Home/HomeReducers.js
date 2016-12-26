import types from '../../constants';

const initialState = {
  filter: '',
  repositories: {
    loading: false,
    data: [],
  },
};

const HomeReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    case types.REPOSITORIES_FETCH_START:
      return {
        ...state,
        repositories: {
          data: [],
          loading: true,
        },
      };
    case types.REPOSITORIES_FETCH_END:
      return {
        ...state,
        repositories: {
          data: action.payload,
          loading: false,
        },
      };
    default:
      return state;
  }
};

export default HomeReducers;
