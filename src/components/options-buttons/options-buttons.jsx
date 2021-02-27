/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './options-buttons.scss';

const OptionsButtons = ({ location }) => (
  <div className={`content__options  options  options--${location}`}>
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
);

export default OptionsButtons;
