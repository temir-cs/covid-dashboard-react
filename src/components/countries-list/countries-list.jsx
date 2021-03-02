import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountriesListItem from '../countries-list-item';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import withCovidDataService from '../hoc';
import { getCountriesData } from '../../actions';
import { compose, formatNum, sortDatabyCriteria, getMatchingCountries } from '../../utils';
import './countries-list.scss';

class CountriesList extends Component {
  componentDidMount() {
    const { getCountriesData } = this.props;
    getCountriesData();
  }

  render() {
    const { countries, loading, error, currentCriteria, searchQuery } = this.props;
    const visibleCountries = getMatchingCountries(searchQuery, countries);
    const sortedCountries = sortDatabyCriteria(visibleCountries, currentCriteria);

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

const mapStateToProps = ({
  countries,
  loadingCountries,
  errorCountries,
  currentCriteria,
  searchQuery,
}) => ({
  countries,
  loading: loadingCountries,
  error: errorCountries,
  currentCriteria,
  searchQuery,
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
