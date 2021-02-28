import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountriesListItem from '../countries-list-item';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import withCovidDataService from '../hoc';
import { getCountriesData } from '../../actions';
import { compose } from '../../utils';
import './countries-list.scss';

class CountriesList extends Component {
  componentDidMount() {
    const { getCountriesData } = this.props;
    getCountriesData();
  }

  render() {
    const { countries, loading, error } = this.props;

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
          {countries.map((country) => (
            <CountriesListItem key={country.country} item={country} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ countries, loadingCountries, errorCountries }) => ({
  countries,
  loading: loadingCountries,
  error: errorCountries,
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
