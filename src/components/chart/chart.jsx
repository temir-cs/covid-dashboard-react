import React, { useEffect } from 'react';
// import Chart as ChartJS from 'chart.js';

const renderChart = () => {
  console.log('Rendering chart!');
  // const key = selectedCriteria || 'dailyConfirmedIncrements';
  // const tooltipTxt = CHART_TOOLTIPS[selectedCriteria] || 'Daily Confirmed Rates';
  // const dates = [...this.state.currentGraph[key].keys()].map((x) => x.slice(0, 10));
  // const values = [...this.state.currentGraph[key].values()];
  // if (this.chart) {
  //   this.chart.destroy();
  // }
  // const ctx = document.getElementById('myChart').getContext('2d');

  // this.chart = new ChartJS(ctx, {
  //   type: 'bar',
  //   data: {
  //     labels: dates,
  //     datasets: [
  //       {
  //         label: key,
  //         data: values,
  //         barPercentage: 1.0,
  //         categoryPercentage: 1.0,
  //         hoverBackgroundColor: 'rgba(0, 0, 0, 0.4)',
  //       },
  //     ],
  //   },
  //   options: {
  //     legend: false,
  //     maintainAspectRatio: false,
  //     scales: {
  //       yAxes: [
  //         {
  //           ticks: {
  //             beginAtZero: true,
  //             callback(value) {
  //               return value > 1000 ? `${`${value}`.slice(0, -3)}K` : value;
  //             },
  //           },
  //         },
  //       ],
  //       xAxes: [
  //         {
  //           gridLines: {
  //             display: false,
  //             offsetGridLines: false,
  //           },
  //           ticks: {
  //             maxTicksLimit: 6,
  //             maxRotation: 0,
  //             minRotation: 0,
  //             callback(value) {
  //               return MONTH_NAMES[parseInt(value.slice(0, 2), 10) - 1];
  //             },
  //           },
  //         },
  //       ],
  //     },
  //     tooltips: {
  //       callbacks: {
  //         label(tooltipItem) {
  //           return `${tooltipTxt} ${tooltipItem.yLabel}`;
  //         },
  //       },
  //     },
  //   },
  // });
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
