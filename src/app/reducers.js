import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import HomeReducers from './containers/Home/HomeReducers';

const App = combineReducers({
  table: HomeReducers,
  routing,
});

export default App;
