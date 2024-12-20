import React from "react";
import'./SecurityAuditLog.css';
const SecurityAuditLog = () => {
  const logs = [
    { timestamp: "2023-05-01 14:10:30", user: "bob.williams", action: "Failed Login", status: "Error", severity: "Medium", location: "Berlin, Germany", ip: "10.1.1.1" },
    { timestamp: "2023-05-01 15:12:10", user: "alice.johnson", action: "Successful Login", status: "Success", severity: "Low", location: "Sydney, Australia", ip: "10.1.1.2" },
  ];

  return (
    <div className="security-log">
      <h2>Security Audit Log</h2>
      <table>
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>User</th>
            <th>Action</th>
            <th>Status</th>
            <th>Severity</th>
            <th>Location</th>
            <th>IP Address</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, index) => (
            <tr key={index}>
              <td>{log.timestamp}</td>
              <td>{log.user}</td>
              <td>{log.action}</td>
              <td>{log.status}</td>
              <td>{log.severity}</td>
              <td>{log.location}</td>
              <td>{log.ip}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SecurityAuditLog;
