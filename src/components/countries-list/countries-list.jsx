import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountriesListItem from '../countries-list-item';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import withCovidDataService from '../hoc';
import { getCountriesData } from '../../actions';
import { compose, formatNum, sortDatabyCriteria } from '../../utils';
import './countries-list.scss';

class CountriesList extends Component {
  componentDidMount() {
    const { getCountriesData } = this.props;
    getCountriesData();
  }

  render() {
    const { countries, loading, error, currentCriteria } = this.props;
    const sortedCountries = sortDatabyCriteria(countries, currentCriteria);

    if (error) {
      return (
        <div className="countries__container">
          <ErrorIndicator />
        </div>
      );
    }

    if (loading) {
      return (
        <div className="countries__container">
          <Spinner />
        </div>
      );
    }

    return (
      <div className="countries__container">
        <ul className="content__countries-list countries">
          {sortedCountries.map((item) => {
            const { country, flagPath } = item;
            const data = item[currentCriteria];
            return (
              <CountriesListItem
                key={country}
                data={formatNum(data)}
                countryName={country}
                flagPath={flagPath}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ countries, loadingCountries, errorCountries, currentCriteria }) => ({
  countries,
  loading: loadingCountries,
  error: errorCountries,
  currentCriteria,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const { covidDataService } = ownProps;
  return {
    getCountriesData: getCountriesData(covidDataService, dispatch),
  };
};

export default compose(
  withCovidDataService(),
  connect(mapStateToProps, mapDispatchToProps)
)(CountriesList);
