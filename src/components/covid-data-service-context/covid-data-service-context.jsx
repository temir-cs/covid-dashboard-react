import React from 'react';

const {
  Provider: CovidDataServiceProvider,
  Consumer: CovidDataServiceConsumer,
} = React.createContext();

export { CovidDataServiceProvider, CovidDataServiceConsumer };
