import React, { useState } from "react";
import './RoleManagement.css';

const RoleManagement = () => {
  // Initial roles data with description, users, and permissions
  const [roles, setRoles] = useState([
    { role: "Admin", description: "Full system access", users: 5, permissions: ["Read", "Write", "Execute"] },
    { role: "Security Analyst", description: "Monitor and analyze security events", users: 12, permissions: ["Read", "Write"] },
    { role: "Incident Responder", description: "Respond to security incidents", users: 8, permissions: ["Read"] },
  ]);

  // State to handle form inputs for adding/updating roles
  const [newRole, setNewRole] = useState({
    role: "",
    description: "",
    users: "",
    permissions: ["Read"],
  });

  // State to track which role is being edited
  const [editingRoleId, setEditingRoleId] = useState(null);

  // Handle input changes for role details
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRole((prevRole) => ({
      ...prevRole,
      [name]: name === "permissions" ? value.split(",") : value,
    }));
  };

  // Function to handle adding a new role
  const addNewRole = () => {
    if (newRole.role.trim() && newRole.description.trim()) {
      const newRoleData = {
        ...newRole,
        users: parseInt(newRole.users) || 0, // Default to 0 if no users entered
      };
      setRoles([...roles, newRoleData]);
      setNewRole({ role: "", description: "", users: "", permissions: ["Read"] }); // Clear inputs
    }
  };

  // Function to handle deleting a role
  const deleteRole = (roleIndex) => {
    const updatedRoles = roles.filter((_, index) => index !== roleIndex);
    setRoles(updatedRoles);
  };

  // Function to handle editing a role
  const editRole = (roleIndex) => {
    setEditingRoleId(roleIndex);
    setNewRole(roles[roleIndex]);
  };

  // Function to handle saving the edited role
  const saveEditRole = () => {
    const updatedRoles = [...roles];
    updatedRoles[editingRoleId] = { ...newRole, users: parseInt(newRole.users) || 0 };
    setRoles(updatedRoles);
    setEditingRoleId(null); // Stop editing
    setNewRole({ role: "", description: "", users: "", permissions: ["Read"] }); // Clear inputs
  };

  return (
    <div className="role-management">
      <h2>Role Management</h2>

      {/* Form for adding or editing roles */}
      <div className="add-role-section">
        <input
          type="text"
          name="role"
          value={newRole.role}
          onChange={handleInputChange}
          placeholder="Enter new role name"
        />
        <input
          type="text"
          name="description"
          value={newRole.description}
          onChange={handleInputChange}
          placeholder="Enter role description"
        />
        <input
          type="number"
          name="users"
          value={newRole.users}
          onChange={handleInputChange}
          placeholder="Enter number of users"
        />
        <input
          type="text"
          name="permissions"
          value={newRole.permissions.join(",")}
          onChange={handleInputChange}
          placeholder="Enter permissions (comma-separated)"
        />

        {editingRoleId !== null ? (
          <button className="save-role-button" onClick={saveEditRole}>Save Changes</button>
        ) : (
          <button className="add-role-button" onClick={addNewRole}>+ Add Role</button>
        )}
      </div>

      {/* Roles table */}
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
                <button className="edit-btn" onClick={() => editRole(index)}>Edit</button>
                <button className="delete-btn" onClick={() => deleteRole(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoleManagement;
