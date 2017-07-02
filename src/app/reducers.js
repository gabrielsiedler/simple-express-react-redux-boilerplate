import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import HeaderReducers from './containers/Header/HeaderReducers';
import HomeReducers from './containers/Home/HomeReducers';

const App = combineReducers({
  home: HomeReducers,
  header: HeaderReducers,
  routing,
});

export default App;
