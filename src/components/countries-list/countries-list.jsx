/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import SearchPanel from '../search-panel';
import ToGlobalButton from '../to-global-button';
import './countries-list.scss';

const CountriesList = () => (
  <div className="content__countries">
    <div className="content__subtitle-container">
      <h3 className="content_subtitle content__subtitle--sm">
        Cases by Country/Region/Sovereignty
      </h3>
      <ToGlobalButton />
    </div>
    <SearchPanel />
    <div className="content__options  options  options--countries">
      <input
        className="options__input"
        type="radio"
        name="countries-options"
        id="countries-cases"
        checked="checked"
        data-label="cases"
      />
      <label htmlFor="countries-cases" className="options__label">
        Cases
      </label>
      <input
        className="options__input"
        type="radio"
        name="countries-options"
        id="countries-deaths"
        data-label="deaths"
      />
      <label htmlFor="countries-deaths" className="options__label">
        Deaths
      </label>
      <input
        className="options__input"
        type="radio"
        name="countries-options"
        id="countries-recovered"
        data-label="recovered"
      />
      <label htmlFor="countries-recovered" className="options__label">
        Recovered
      </label>
    </div>
  </div>
);

export default CountriesList;
