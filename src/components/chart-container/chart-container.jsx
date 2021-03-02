import React from 'react';
import Chart from '../chart';
import OptionsButtons from '../options-buttons';
import SearchPanel from '../search-panel';
import ToGlobalButton from '../to-global-button';
import './chart-container.scss';

const ChartContainer = () => (
  <div className="content__chart">
    <h2 className="content__subtitle">
      Daily rates: <span className="content__country-name">Global</span>
    </h2>
    <div className="content__search-block">
      <ToGlobalButton />
      <span className="content__remark">or</span>
      <SearchPanel />
    </div>
    <OptionsButtons location="chart" />
    <Chart />
  </div>
);

export default ChartContainer;
