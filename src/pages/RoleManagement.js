import React from "react";
import './RoleManagement.css'

const RoleManagement = () => {
  const roles = [
    { role: "Admin", description: "Full system access", users: 5, permissions: ["Read", "Write", "Execute"] },
    { role: "Security Analyst", description: "Monitor and analyze security events", users: 12, permissions: ["Read", "Write"] },
    { role: "Incident Responder", description: "Respond to security incidents", users: 8, permissions: ["Read"] },
  ];

  return (
    <div className="role-management">
      <h2>Role Management</h2>
      <button className="add-role-button">+ Add Role</button>
      <table>
        <thead>
          <tr>
            <th>Role</th>
            <th>Description</th>
            <th>Users</th>
            <th>Permissions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role, index) => (
            <tr key={index}>
              <td>{role.role}</td>
              <td>{role.description}</td>
              <td>{role.users}</td>
              <td>
                {role.permissions.map((perm, i) => (
                  <span key={i} className={`permission ${perm.toLowerCase()}`}>
                    {perm}
                  </span>
                ))}
              </td>
              <td>
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoleManagement;
