import { useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend
);

const MyChartComponent = () => {
  useEffect(() => {
    const chart = new Chart('myChart', {
      type: 'pie', // Or any chart type
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

    // Cleanup on component unmount
    return () => {
      chart.destroy();
    };
  }, []);

  return <canvas id="myChart"></canvas>;
};

export default MyChartComponent;
