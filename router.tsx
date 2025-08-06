// router.tsx
import { createBrowserRouter, redirect } from "react-router-dom";
import React from "react";
import Home from "./src/pages/Home";
import Blogs from "./src/pages/Blogs";
import Contact from "./src/pages/Contact";
import { Profile } from "./src/pages/Profile/Profile";
import { NavBar } from "./src/Component/navBar/NavBar";
import SignUp from "./src/pages/SignUp/signUp";
import SignIn from "./src/pages/SignIn/signIn";
import { getStorageItem } from "./src/utils/localStorageHelper";
import { NoPageFound } from "./src/pages/NoPageFound";

const requireAuth = () => {
  const user = getStorageItem({ key: "loggedUser" });
  if (!user) {
    return redirect("/signIn"); // already logged in → go to home
  }
  return null;
};

const redirectIfAuthenticated = () => {
  const user = getStorageItem({ key: "loggedUser" });
  if (user) {
    return redirect("/");
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
