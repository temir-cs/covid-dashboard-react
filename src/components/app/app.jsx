import React from 'react';
import Header from '../header';
import Footer from '../footer';
import './app.scss';
// import CovidDataService from '../../services/covid-data-service';

// const covidDataService = new CovidDataService();

// covidDataService.getGlobalData().then((data) => console.log(data));

// covidDataService.getCountriesData().then((data) => console.log(data));

const App = () => (
  <>
    <Header />
    <main className="content">
      <div className="content__left">
        <p>Content Left</p>
      </div>
      <div className="content__center">
        <p>Content Center</p>
      </div>
      <div className="content__right">
        <p>Content Right</p>
      </div>
    </main>
    <Footer />
  </>
);

export default App;
