import React from "react";
import { Link } from "react-router-dom";

export const NoPageFound = () => {
  const divContainerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };
  return (
    <div style={divContainerStyle}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to={"/"}>Home</Link>
    </div>
  );
};
