import About from './containers/About/About';
import Home from './containers/Home/Home';
import NotFound from './containers/NotFound/NotFound';

export default [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/*',
    component: NotFound,
  },
];
