// router.tsx
import { createBrowserRouter, redirect } from "react-router-dom";
import React from "react";

import Home from "./src/pages/Home";
import Blogs from "./src/pages/Blogs";
import Contact from "./src/pages/Contact";
import NoPageFound from "./src/pages/NoPageFound";
import AdminDashoboard from "./src/pages/AdminDashoboard";
import SignIn from "./src/pages/SignIn/signIn";
import SignUp from "./src/pages/SignUp/signUp";
import Profile from "./src/pages/Profile/Profile";
import NavBar from "./src/component/navBar/NavBar";

import { getStorageItem } from "./src/utils/localStorageHelper";
import { LOCAL_STORAGE_KEYS, ROLE } from "./src/constants/constants";

//check Authentication
const requireAuth = () => {
  const user = getStorageItem({ key: LOCAL_STORAGE_KEYS.LOGGED_USER });
  if (!user) return redirect("/signIn");

  // Admin trying to access normal user pages → redirect to admin
  if (user.role === ROLE.ADMIN) return redirect("/admin");

  return null;
};

// Auth loader for admin route
const requireAdminAuth = () => {
  const user = getStorageItem({ key: LOCAL_STORAGE_KEYS.LOGGED_USER });
  if (!user || user.role !== ROLE.ADMIN) return redirect("/signIn");
  return null;
};

// Prevent access to signIn / signUp if already authenticated
const redirectIfAuthenticated = () => {
  const user = getStorageItem({ key: LOCAL_STORAGE_KEYS.LOGGED_USER });
  if (user) {
    if (user.role === ROLE.ADMIN) {
      return redirect("/admin");
    }
    if (user.role === ROLE.USER) {
      return redirect("/");
    }
  }
  return null;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    loader: requireAuth,
    errorElement: <NoPageFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/admin",
    element: <NavBar />,
    loader: requireAdminAuth,
    children: [{ index: true, element: <AdminDashoboard /> }],
  },
  {
    path: "/signIn",
    element: <SignIn />,
    loader: redirectIfAuthenticated,
  },
  {
    path: "/signUp",
    element: <SignUp />,
    loader: redirectIfAuthenticated,
  },
  {
    path: "*",
    element: <NoPageFound />,
  },
]);

export default router;
