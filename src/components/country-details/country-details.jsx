import React from 'react';
import CountryDetailsControls from '../country-details-controls';
import CountryDetailsStats from '../country-details-stats';
import SearchPanel from '../search-panel';

const CountryDetails = () => (
  <div className="content__details">
    <h2 className="content__subtitle">
      Details: <span className="content__country-name">Global</span>
    </h2>
    <div className="content__search-block">
      <span className="content__remark">or</span>
      <SearchPanel />
    </div>
    <p className="content__note">
      Click on toggles to see &ldquo;Total / Last update&rdquo; and &ldquo;Absolute / Per
      100K&rdquo;
    </p>
    <CountryDetailsControls />
    <CountryDetailsStats />
  </div>
);

export default CountryDetails;
