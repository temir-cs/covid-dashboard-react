import React, { useEffect } from 'react';
// import Chart as ChartJS from 'chart.js';

const renderChart = () => {
  console.log('Chart will arrive soon!');
};

const Chart = () => {
  useEffect(() => {
    renderChart();
  });

  return (
    <div className="content__chart-cont  chart-container">
      <canvas id="myChart"></canvas>
    </div>
  );
};

export default Chart;
