import React from "react";
import { useNavigate } from "react-router-dom";
import "./profile.css";
import { LOCAL_STORAGE_KEYS } from "../../constants/constants";

const Profile = () => {
  const navigate = useNavigate();

  const logOutButton = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.LOGGED_USER); // Clear session
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

export default Profile;
