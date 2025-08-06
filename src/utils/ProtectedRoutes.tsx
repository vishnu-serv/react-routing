import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const isLoggedIn = !!localStorage.getItem("loggedUser");
  return isLoggedIn ? <Outlet /> : <Navigate to="/signIn" replace />;
};

export default ProtectedRoutes;
