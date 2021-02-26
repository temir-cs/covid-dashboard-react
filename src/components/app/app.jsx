import React from 'react';
import ErrorBoundry from '../error-boundry';
import Header from '../header';
import './app.scss';

const App = () => (
  <ErrorBoundry>
    <Header />
    <p>Hello world!</p>
  </ErrorBoundry>
);

export default App;
