import React from "react";
import { Bar, Pie } from "react-chartjs-2";


const SessionMonitor = () => {
  const barData = {
    labels: [...Array(24).keys()].map((h) => `${h}:00`),
    datasets: [
      { label: "Mobile", data: [10, 20, 30, 40], backgroundColor: "blue" },
      { label: "Desktop", data: [15, 25, 35, 45], backgroundColor: "green" },
    ],
  };

  const pieData = {
    labels: ["Mobile", "Desktop", "Tablet"],
    datasets: [{ data: [55, 43, 2], backgroundColor: ["blue", "green", "orange"] }],
  };

  return (
    <div className="session-monitor">
      <h2>Active Sessions Monitor</h2>
      <div className="charts">
        <Bar data={barData} />
        <Pie data={pieData} />
      </div>
    </div>
  );
};

export default SessionMonitor;
