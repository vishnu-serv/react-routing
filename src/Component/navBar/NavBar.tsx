import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./style.css";

export const NavBar = () => {
  return (
    <>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/profile/vishnuP">Profile</Link>
          </li>
        </ul>
      </nav> */}

      <nav>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "active-link" : "inactive-link"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            isActive ? "active-link" : "inactive-link"
          }
        >
          Blogs
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "active-link" : "inactive-link"
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "active-link" : "inactive-link"
          }
        >
          Profile
        </NavLink>
      </nav>

      <Outlet />
    </>
  );
};
