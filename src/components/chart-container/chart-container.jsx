import React from 'react';
import { connect } from 'react-redux';
import ChartBlock from '../chart';
import OptionsButtons from '../options-buttons';
import SearchPanel from '../search-panel';
import ToGlobalButton from '../to-global-button';
import './chart-container.scss';

const ChartContainer = ({ selectedCountry }) => {
  const name = selectedCountry || 'Global';
  return (
    <div className="content__chart">
      <h2 className="content__subtitle">
        Daily rates: <span className="content__country-name">{name}</span>
      </h2>
      <div className="content__search-block">
        <ToGlobalButton />
        <span className="content__remark">or</span>
        <SearchPanel />
      </div>
      <OptionsButtons location="chart" />
      <ChartBlock />
    </div>
  );
};

const mapStateToProps = ({ selectedCountry }) => ({ selectedCountry });

export default connect(mapStateToProps)(ChartContainer);
