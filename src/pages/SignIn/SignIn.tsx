import React, { useState } from "react";
import "./signIn.css";
import { Link, useNavigate } from "react-router-dom";
import { getStorageItem, setStorageItem } from "../../utils/localStorageHelper";
import { LOCAL_STORAGE_KEYS, ROLE } from "../../constants/constants";

const adminCredentials = {
  email: "admin@gmail.com",
  password: "admin@123",
  role: ROLE.ADMIN,
};

const SignIn = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Step 1: Check if credentials match admin
    if (
      form.email === adminCredentials.email &&
      form.password === adminCredentials.password
    ) {
      alert("Welcome Admin!");
      setStorageItem({
        key: LOCAL_STORAGE_KEYS.LOGGED_USER,
        value: {
          email: adminCredentials.email,
          password: adminCredentials.password,
          role: ROLE.ADMIN,
        },
      });
      navigate("/admin", { replace: true });
      return;
    }

    // Step 2: Check against registered user data
    const storedData = getStorageItem({ key: LOCAL_STORAGE_KEYS.USER_DATA });
    if (!storedData) {
      alert("No registered users found. Please register first.");
      return;
    }

    const foundUser = storedData.find(
      (user: any) =>
        user.email === form.email && user.password === form.password
    );

    if (foundUser) {
      alert(`Welcome back, ${foundUser.email}!`);
      setStorageItem({
        key: LOCAL_STORAGE_KEYS.LOGGED_USER,
        value: {
          email: foundUser.email,
          password: foundUser.password,
          role: ROLE.USER,
        },
      });
      navigate("/", { replace: true });
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login to Your Account</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          placeholder="Email Address"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
          className="login-input"
        />
        <button type="submit" className="login-button">
          Login
        </button>
        <p className="createAccText">
          create Account ?{" "}
          <Link to="/signUp" style={{ backgroundColor: "white" }}>
            signUp
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
