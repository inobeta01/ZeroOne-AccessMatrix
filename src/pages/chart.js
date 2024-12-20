import React, { useEffect, useRef } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, ArcElement, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

// Register the necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const MyChartComponent = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null); // Store the chart instance

  const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [{
      data: [12, 19, 3],
      backgroundColor: ['red', 'blue', 'yellow'],
    }]
  };

  const options = {
    responsive: true
  };

  // Destroy the previous chart instance before rendering a new one
  useEffect(() => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy(); // Destroy old chart
    }

    // Create a new chart
    chartInstanceRef.current = new ChartJS(chartRef.current, {
      type: 'pie',
      data,
      options
    });

    // Cleanup function to destroy chart on unmount
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [data, options]); // Run effect when data or options change

  return <canvas ref={chartRef}></canvas>; // Canvas element
};

export default MyChartComponent;
