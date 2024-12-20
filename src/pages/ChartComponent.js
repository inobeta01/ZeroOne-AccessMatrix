import React, { useEffect } from 'react';
import { Chart } from 'chart.js';

const MyChartComponent = () => {
  useEffect(() => {
    // Initialize the chart
    const chart = new Chart('myChart', {
      type: 'bar', // or 'pie', 'line', etc.
      data: {
        labels: ['A', 'B', 'C'],
        datasets: [{
          data: [10, 20, 30],
        }],
      },
      options: {
        responsive: true,
      },
    });

    // Cleanup chart on component unmount
    return () => {
      chart.destroy();
    };
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <canvas id="myChart"></canvas>
  );
};

export default MyChartComponent;
