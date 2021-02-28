import React from 'react';
import Header from '../header';
import Footer from '../footer';
import './app.scss';
import UpdateDate from '../update-date';
import GlobalCases from '../global-cases';
import CountriesListContainer from '../countries-list-container';
import Map from '../map';
import ChartContainer from '../chart-container';
import CountryDetails from '../country-details';
// import CovidDataService from '../../services/covid-data-service';

// const covidDataService = new CovidDataService();
// covidDataService.getGlobalData().then((data) => console.log(data));
// covidDataService.getCountriesData().then((data) => console.log(data));

const App = () => (
  <>
    <Header />
    <main className="content">
      <div className="content__left">
        <UpdateDate />
        <GlobalCases />
        <CountriesListContainer />
      </div>
      <div className="content__center">
        <Map />
      </div>
      <div className="content__right">
        <CountryDetails />
        <ChartContainer />
      </div>
    </main>
    <Footer />
  </>
);

export default App;
