import { combineReducers } from 'redux';

import HeaderReducers from './containers/Header/HeaderReducers';
import HomeReducers from './containers/Home/HomeReducers';

const App = combineReducers({
  home: HomeReducers,
  header: HeaderReducers,
});

export default App;
