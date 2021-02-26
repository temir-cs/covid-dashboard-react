import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import CovidDataService from './services/covid-data-service';
import { CovidDataServiceProvider } from './components/covid-data-service-context';
import store from './store';

const covidDataService = new CovidDataService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <CovidDataServiceProvider value={covidDataService}>
        <App />
      </CovidDataServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);
