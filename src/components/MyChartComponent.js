import React, { useEffect, useRef } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend } from "chart.js";
import './MyChartComponent.css'
// Register components needed by Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const MyChartComponent = ({ chartData }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Ensure that the previous chart is destroyed before rendering a new one
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');

      // Destroy any existing chart to prevent "Canvas is already in use" error
      if (window.myChart) {
        window.myChart.destroy();
      }

      // Create a new chart
      window.myChart = new ChartJS(ctx, {
        type: 'pie', // or 'bar', 'line', etc.
        data: chartData,
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "My Chart",
            },
          },
        },
      });
    }

    // Cleanup function to destroy the chart when the component unmounts
    return () => {
      if (window.myChart) {
        window.myChart.destroy();
      }
    };
  }, [chartData]); // Run this effect whenever chartData changes

  return <canvas ref={canvasRef}></canvas>;
};

export default MyChartComponent;
