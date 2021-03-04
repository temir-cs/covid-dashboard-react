/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Chart from 'chart.js';
import { connect } from 'react-redux';
import withCovidDataService from '../hoc';
import { getGlobalDailyData, getCountryDailyData } from '../../actions';
import { compose } from '../../utils';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { SELECTED_CRITERIA, CHART_TOOLTIPS, MONTH_NAMES } from './consts';
import './chart.scss';

const renderChart = (currentGraph, selectedCriteria = 'dailyConfirmedIncrements') => {
  if (!currentGraph[selectedCriteria]) return;
  const key = selectedCriteria;
  const tooltipTxt = CHART_TOOLTIPS[selectedCriteria] || 'Daily Confirmed Rates';
  const dates = [...currentGraph[key].keys()].map((x) => x.slice(0, 10));
  const values = [...currentGraph[key].values()];
  const ctx = document.getElementById('myChart').getContext('2d');

  const chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: dates,
      datasets: [
        {
          label: key,
          data: values,
          barPercentage: 1.0,
          categoryPercentage: 1.0,
          hoverBackgroundColor: 'rgba(0, 0, 0, 0.4)',
        },
      ],
    },
    options: {
      legend: false,
      maintainAspectRatio: false,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              callback(value) {
                return value > 1000 ? `${`${value}`.slice(0, -3)}K` : value;
              },
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              display: false,
              offsetGridLines: false,
            },
            ticks: {
              maxTicksLimit: 6,
              maxRotation: 0,
              minRotation: 0,
              callback(value) {
                return MONTH_NAMES[parseInt(value.slice(0, 2), 10) - 1];
              },
            },
          },
        ],
      },
      tooltips: {
        callbacks: {
          label(tooltipItem) {
            return `${tooltipTxt} ${tooltipItem.yLabel}`;
          },
        },
      },
    },
  });
};

class ChartBlock extends Component {
  componentDidMount() {
    const { getGlobalDailyData } = this.props;
    getGlobalDailyData();
  }

  componentDidUpdate(prevProps) {
    const { selectedCountry, currentGraph, selectedCriteria } = this.props;
    if (prevProps.selectedCountry !== selectedCountry) {
      if (!selectedCountry) {
        getGlobalDailyData();
      } else {
        getCountryDailyData(selectedCountry);
      }
    }
    if (
      prevProps.currentGraph !== currentGraph ||
      prevProps.selectedCriteria !== selectedCriteria
    ) {
      renderChart(currentGraph, SELECTED_CRITERIA[selectedCriteria]);
    }
  }

  render() {
    const { loading, error } = this.props;
    if (loading) {
      return (
        <div className="content__chart-cont  chart-container">
          <Spinner />
        </div>
      );
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return (
      <div className="content__chart-cont  chart-container">
        <canvas id="myChart"></canvas>
      </div>
    );
  }
}

const mapStateToProps = ({
  currentGraph,
  loadingDaily,
  errorDaily,
  selectedCountry,
  selectedCriteria,
}) => ({
  currentGraph,
  loading: loadingDaily,
  error: errorDaily,
  selectedCountry,
  selectedCriteria,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const { covidDataService } = ownProps;
  return {
    getGlobalDailyData: getGlobalDailyData(covidDataService, dispatch),
    getCountryDailyData: (countryName) =>
      getCountryDailyData(covidDataService, dispatch, countryName),
  };
};

export default compose(
  withCovidDataService(),
  connect(mapStateToProps, mapDispatchToProps)
)(ChartBlock);
