/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import OptionsButtons from '../options-buttons';
import SearchPanel from '../search-panel';
import ToGlobalButton from '../to-global-button';
import CountriesList from '../countries-list';
import './countries-list-container.scss';

const CountriesListContainer = () => (
  <div className="content__countries">
    <div className="content__subtitle-container">
      <h3 className="content_subtitle content__subtitle--sm">
        Cases by Country/Region/Sovereignty
      </h3>
      <ToGlobalButton />
    </div>
    <SearchPanel />
    <OptionsButtons location="countries" />
    <CountriesList />
  </div>
);

export default CountriesListContainer;
