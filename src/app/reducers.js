import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import HomeReducers from './Home/HomeReducers';

const App = combineReducers({
  filter: HomeReducers,
  routing,
});

export default App;
