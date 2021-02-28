/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import withCovidDataService from '../hoc';
import { getGlobalData } from '../../actions';
import { compose, formatNum } from '../../utils';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

class GlobalCases extends Component {
  componentDidMount() {
    const { getGlobalData } = this.props;
    getGlobalData();
  }

  render() {
    const { totalConfirmed, loading, error } = this.props;

    if (error) {
      return (
        <div className="content__global">
          <ErrorIndicator />
        </div>
      );
    }

    if (loading) {
      return (
        <div className="content__global">
          <Spinner />
        </div>
      );
    }

    return (
      <div className="content__global">
        <h3 className="content__subtitle content__subtitle--mid">Global cases</h3>
        <p className="content__accent content__accent--total">{formatNum(totalConfirmed)}</p>
      </div>
    );
  }
}

const mapStateToProps = ({ global: { totalConfirmed }, loadingGlobal, errorGlobal }) => ({
  totalConfirmed,
  loading: loadingGlobal,
  error: errorGlobal,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const { covidDataService } = ownProps;
  return {
    getGlobalData: getGlobalData(covidDataService, dispatch),
  };
};

export default compose(
  withCovidDataService(),
  connect(mapStateToProps, mapDispatchToProps)
)(GlobalCases);
