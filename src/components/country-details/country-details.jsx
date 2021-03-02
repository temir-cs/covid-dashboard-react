/* eslint-disable arrow-body-style */
import React from 'react';
import { connect } from 'react-redux';
import CountryDetailsControls from '../country-details-controls';
import CountryDetailsStats from '../country-details-stats';
import SearchPanel from '../search-panel';
import Spinner from '../spinner';
import { formatNum, getCriteria, findCountry } from '../../utils';
import ToGlobalButton from '../to-global-button';

const CountryDetails = ({
  loading,
  global,
  countries,
  currentTimePeriod,
  currentNumberFormat,
  selectedCountry,
}) => {
  let heading;
  let cases;
  let deaths;
  let recovered;

  if (loading) {
    return (
      <div className="content__details">
        <Spinner />
      </div>
    );
  }
  if (selectedCountry) {
    heading = selectedCountry;
    const country = findCountry(selectedCountry, countries);
    cases = formatNum(country[getCriteria('cases', currentTimePeriod, currentNumberFormat)]);
    deaths = formatNum(country[getCriteria('deaths', currentTimePeriod, currentNumberFormat)]);
    recovered = formatNum(
      country[getCriteria('recovered', currentTimePeriod, currentNumberFormat)]
    );
  } else {
    heading = 'Global';
    cases = formatNum(global[getCriteria('cases', currentTimePeriod, currentNumberFormat)]);
    deaths = formatNum(global[getCriteria('deaths', currentTimePeriod, currentNumberFormat)]);
    recovered = formatNum(global[getCriteria('recovered', currentTimePeriod, currentNumberFormat)]);
  }

  return (
    <div className="content__details">
      <h2 className="content__subtitle">
        Details: <span className="content__country-name">{heading}</span>
      </h2>
      <div className="content__search-block">
        <ToGlobalButton />
        <span className="content__remark">or</span>
        <SearchPanel />
      </div>
      <p className="content__note">
        Click on toggles to see &ldquo;Total / Last update&rdquo; and &ldquo;Absolute / Per
        100K&rdquo;
      </p>
      <CountryDetailsControls />
      <CountryDetailsStats loading={loading} cases={cases} deaths={deaths} recovered={recovered} />
    </div>
  );
};

const mapStateToProps = ({
  loadingGlobal,
  global,
  countries,
  currentTimePeriod,
  currentNumberFormat,
  selectedCountry,
}) => ({
  loading: loadingGlobal,
  global,
  countries,
  currentTimePeriod,
  currentNumberFormat,
  selectedCountry,
});

export default connect(mapStateToProps)(CountryDetails);
