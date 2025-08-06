import React, { useState } from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import { getStorageItem, setStorageItem } from "../../utils/localStorageHelper";

const SignUp = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingUsers = getStorageItem({ key: "userData" }) || [];
    const userExists = existingUsers.some((user) => user.email === form.email);

    if (userExists) {
      alert("User with this email already exists.");
      return;
    }

    const updatedUsers = [...existingUsers, form];
    setStorageItem({ key: "userData", value: updatedUsers });
    alert(`Registered: ${form.name}`);
    navigate("/signIn");
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Create an Account</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <label style={{ backgroundColor: "#ffffff", marginBottom: "5px" }}>
          Full Name
        </label>
        <input
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          className="register-input"
        />

        <label style={{ backgroundColor: "#ffffff", marginBottom: "5px" }}>
          Email
        </label>
        <input
          type="email"
          placeholder="Email Address"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          className="register-input"
        />

        <label style={{ backgroundColor: "#ffffff", marginBottom: "5px" }}>
          Password
        </label>
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
          className="register-input"
        />
        <button type="submit" className="register-button">
          Register
        </button>
        <p className="createAccText">
          Already have Account ?{" "}
          <Link to="/signIn" style={{ backgroundColor: "white" }}>
            signIn
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
