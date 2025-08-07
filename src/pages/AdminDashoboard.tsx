import React, { useEffect, useState } from "react";
import { LOCAL_STORAGE_KEYS, ROLE } from "../constants/constants";
import { useNavigate } from "react-router-dom";
import { getStorageItem } from "../utils/localStorageHelper";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

const thStyle = {
  textAlign: "left" as const,
  borderBottom: "2px solid #ccc",
  padding: "10px",
  backgroundColor: "#f0f0f0",
};

const tdStyle = {
  padding: "10px",
  borderBottom: "1px solid #eee",
};

const logOut_button = {
  padding: "8px 12px",
  alignItem: "center",
  backgroundColor: "  #007bff",
  textAlign: "left" as const,
  borderRadius: "8px",
  marginTop: "20px",
  marginBottom: "20px",
  float: "right",
  color: "#ffffff",
  fontSize: "1rem",
};

const AdminDashoboard = () => {
  const [users, setUsers] = useState<User[]>([]);
  const navigate = useNavigate();

  const logOutButton = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.LOGGED_USER); // Clear session
    navigate("/signIn"); // Redirect to login screen
  };

  useEffect(() => {
    const storedUsers =
      getStorageItem({ key: LOCAL_STORAGE_KEYS.USER_DATA }) || [];

    const nonAdminUsers = storedUsers.filter(
      (user: User) => user.role !== ROLE.ADMIN
    );

    setUsers(nonAdminUsers);
  }, []);
  return (
    <div style={{ padding: "20px" }}>
      <h2>Admin Dashboard</h2>
      <button style={logOut_button} onClick={logOutButton}>
        Log Out
      </button>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th style={thStyle}>id</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td style={tdStyle}>{user.id}</td>
              <td style={tdStyle}>{user.name}</td>
              <td style={tdStyle}>{user.email}</td>
              <td style={tdStyle}>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashoboard;
