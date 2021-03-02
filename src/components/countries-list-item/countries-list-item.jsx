import React from 'react';
import { connect } from 'react-redux';
import { selectedCountry } from '../../actions';
import './countries-list-item.scss';

const CountriesListItem = ({ data, countryName, flagPath, onSelectedCountry }) => (
  <li className="countries__item" onClick={() => onSelectedCountry(countryName)}>
    <span className="countries__number">{data}</span>
    <span className="countries__name">{countryName}</span>
    <div className="countries__flag">
      <img src={flagPath} alt={countryName} />
    </div>
  </li>
);

const mapDispatchToProps = (dispatch) => ({
  onSelectedCountry: (countryName) => dispatch(selectedCountry(countryName)),
});

export default connect(null, mapDispatchToProps)(CountriesListItem);
