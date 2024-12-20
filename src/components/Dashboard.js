import React from "react";
import RoleManagement from '../pages/RoleManagement';
import SessionMonitor from '../pages/SessionMonitor';
import SecurityAuditLog from '../pages/SecurityAuditLog';
import './Dashboard.css';

const DashboardPage = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>SecureOps</h1>
        <div className="security-status">Security Status: <span>Low</span></div>
      </header>
      <main>
        <section className="top-section">
          <RoleManagement />
          <SessionMonitor />
        </section>
        <section className="bottom-section">
          <SecurityAuditLog />
        </section>
      </main>
    </div>
  );
};

export default DashboardPage;
