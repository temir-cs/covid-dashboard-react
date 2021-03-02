import React from 'react';
import './country-details-stats.scss';

const CountryDetailsStats = ({ cases, deaths, recovered }) => (
  <ul className="content__stats stats">
    <li className="stats__item">
      <span className="stats__number  stats__number--cases">{cases}</span>
      <span className="stats__tag">Cases</span>
    </li>
    <li className="stats__item">
      <span className="stats__number  stats__number--deaths">{deaths}</span>
      <span className="stats__tag">Deaths</span>
    </li>
    <li className="stats__item">
      <span className="stats__number  stats__number--recovered">{recovered}</span>
      <span className="stats__tag">Recovered</span>
    </li>
  </ul>
);

export default CountryDetailsStats;
