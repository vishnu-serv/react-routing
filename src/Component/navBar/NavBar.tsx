import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./style.css";
import { getStorageItem } from "../../utils/localStorageHelper";
import { LOCAL_STORAGE_KEYS, ROLE } from "../../constants/constants";

const NavBar = () => {
  const [role, setRole] = useState("");

  useEffect(() => {
    const user = getStorageItem({ key: LOCAL_STORAGE_KEYS.LOGGED_USER });
    setRole(user.role);
  }, []);
  return (
    <>
      {role === ROLE.USER && (
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
      )}

      {role === ROLE.ADMIN && (
        <nav>
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              isActive ? "active-link" : "inactive-link"
            }
          >
            DashBoard
          </NavLink>
        </nav>
      )}

      <Outlet />
    </>
  );
};

export default NavBar;
