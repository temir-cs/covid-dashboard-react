/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { CovidDataServiceConsumer } from '../covid-data-service-context';

const withCovidDataService = () => (WrappedComponent) => (props) => (
  <CovidDataServiceConsumer>
    {(covidDataService) => <WrappedComponent {...props} covidDataService={covidDataService} />}
  </CovidDataServiceConsumer>
);

export default withCovidDataService;
