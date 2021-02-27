import React from 'react';
import './country-details-stats.scss';

const CountryDetailsStats = () => (
  <ul className="content__stats stats">
    <li className="stats__item">
      <span className="stats__number  stats__number--cases">114.035.478</span>
      <span className="stats__tag">Cases</span>
    </li>
    <li className="stats__item">
      <span className="stats__number  stats__number--deaths">2.530.385</span>
      <span className="stats__tag">Deaths</span>
    </li>
    <li className="stats__item">
      <span className="stats__number  stats__number--recovered">89.591.889</span>
      <span className="stats__tag">Recovered</span>
    </li>
  </ul>
);

export default CountryDetailsStats;
