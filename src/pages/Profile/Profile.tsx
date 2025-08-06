import React from "react";
import { useNavigate } from "react-router-dom";
import "./profile.css";

export const Profile = () => {
  const navigate = useNavigate();

  const logOutButton = () => {
    localStorage.removeItem("loggedUser"); // Clear session
    navigate("/signIn"); // Redirect to login screen
  };

  return (
    <div>
      <h2>Profile Page</h2>
      <button className="logOut-button" onClick={logOutButton}>
        Log Out
      </button>
    </div>
  );
};
