import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import types from '../actions/types';

const filter = (state = '', action) => {
  switch (action.type) {
    case types.FILTER:
      return action.filter;
    default:
      return state;
  }
};


const rootReducer = combineReducers({
  filter,
  routing,
});

export default rootReducer;
