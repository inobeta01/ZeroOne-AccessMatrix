import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/login";
import DashboardPage from "./components/Dashboard";
import ProtectedRoute from "./pages/ProtectedRoute";
import MyChartComponent from "./components/MyChartComponent";  

const App = () => {
  const [chartData, setChartData] = useState({
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        data: [12, 19, 3],
        backgroundColor: ["red", "blue", "yellow"],
      },
    ],
  });

  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Effect to apply the theme (dark or light) on mount
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <Router>
      <div className="App">
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
        <Routes>
          {/* Login Route */}
          <Route path="/login" element={<LoginPage />} />

          {/* Protected Dashboard Route */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
                {/* Include the chart component here as part of the dashboard */}
                <MyChartComponent chartData={chartData} />
              </ProtectedRoute>
            }
          />

          {/* Redirect unknown routes to Login */}
          <Route path="*" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
