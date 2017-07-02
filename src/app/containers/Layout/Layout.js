import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

import { Container } from '../../components/ui';

const App = ({ children, location }) => (
  <div>
    <Header location={location} />
    <Container>
      {children}
    </Container>
  </div>
);

App.propTypes = {
  children: PropTypes.object,
  location: PropTypes.object,
};

export default App;
