import React from 'react';
import './country-details-controls.scss';

const CountryDetailsControls = () => (
  <div className="content__controls toggle">
    <div className="toggle__btn  toggle__btn--period">
      <p className="toggle__txt  toggle__txt--period">Total period</p>
    </div>
    <div className="toggle__btn  toggle__btn--numbers">
      <p className="toggle__txt  toggle__txt--numbers">Absolute</p>
    </div>
  </div>
);

export default CountryDetailsControls;
