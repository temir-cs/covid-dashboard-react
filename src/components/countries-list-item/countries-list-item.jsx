import React from 'react';
import './countries-list-item.scss';

const CountriesListItem = ({ data, countryName, flagPath }) => (
  <li className="countries__item">
    <span className="countries__number">{data}</span>
    <span className="countries__name">{countryName}</span>
    <div className="countries__flag">
      <img src={flagPath} alt={countryName} />
    </div>
  </li>
);

export default CountriesListItem;
