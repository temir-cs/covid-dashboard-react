import React from 'react';

const CountriesListItem = ({ item }) => {
  const { number, country, flagpath } = item;
  return (
    <li className="countries__item">
      <span className="countries__number">{number}</span>
      <span className="countries__name">{country}</span>
      <div className="counries__flag">
        <img src={flagpath} alt={country} />
      </div>
    </li>
  );
};

export default CountriesListItem;
