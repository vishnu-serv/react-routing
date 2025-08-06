import React, { useState } from "react";
import "./signIn.css";
import { Link, useNavigate } from "react-router-dom";
import { getStorageItem, setStorageItem } from "../../utils/localStorageHelper";

const SignIn = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedData = getStorageItem({ key: "userData" });
    if (!storedData) {
      alert("No registered users found. Please register first.");
      return;
    }

    const foundUser = storedData.find(
      (user) => user.email === form.email && user.password === form.password
    );

    if (foundUser) {
      alert(`Welcome back, ${foundUser.email}!`);
      setStorageItem({ key: "loggedUser", value: form });
      navigate("/", { replace: true }); // Navigate to home or dashboard
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
