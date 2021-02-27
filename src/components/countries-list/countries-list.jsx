import React from 'react';
import CountriesListItem from '../countries-list-item';

const CountriesList = ({ countries = [] }) => (
  <div className="countries__container">
    <ul className="content__countries-list countries">
      {countries.map((country) => {
        const { id } = country;
        return (
          <li key={id}>
            <CountriesListItem country={country} />
          </li>
        );
      })}
    </ul>
  </div>
);

export default CountriesList;
