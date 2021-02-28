import React from 'react';
import './countries-list-item.scss';
import { formatNum } from '../../utils';

const CountriesListItem = ({ item }) => {
  const { totalConfirmed, country, flagPath } = item;
  return (
    <li className="countries__item">
      <span className="countries__number">{formatNum(totalConfirmed)}</span>
      <span className="countries__name">{country}</span>
      <div className="countries__flag">
        <img src={flagPath} alt={country} />
      </div>
    </li>
  );
};

export default CountriesListItem;
