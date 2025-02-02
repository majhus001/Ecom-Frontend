import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import API_BASE_URL from "../api";

import "./Login.css"; // Import the CSS file

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/auth/login/`,
        formData
      );
      console.log("login success");
      if (response.data.success) {
        const user = response.data.user;
        const userId = response.data.user._id;
        console.log(userId);
        setMessage("Login successful!");
        setTimeout(() => {
          if (response.data.role == "Admin") {
            navigate("/adhome", { state: { userId, user } });
          } else {
            navigate("/home", { state: { userId } });
          }
        }, 1000);
      } else {
        if (response.data.message) {
          setMessage(response.data.message); // Show message from the backend
        } else {
          setMessage("Login failed. Try again.");
        }
      }
    } catch (error) {
      console.error("Error logging in:", error);
      if (error.response && error.response.data) {
        if (error.response.data.message) {
          setMessage(error.response.data.message);
          setTimeout(() => {
            setMessage("");
          }, 3000);
        } else {
          setMessage("An error occurred. Please try again.");
          setTimeout(() => {
            setMessage("");
          }, 3000);
        }
      } else {
        setMessage("Network error. Please try again.");
      }
    }
  };

  return (
    <div className="outer">
      <div className="lg-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="lg-input-group">
            <label className="label">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input"
            />
          </div>
          <div className="lg-input-group">
            <label className="label">Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="input"
            />
          </div>
          <button type="submit" className="lg-button">
            Login
          </button>
        </form>
        {message && <p className="message">{message}</p>}
        <p className="login-link">
          Don't have an account?
          <Link to="/signup">
            {" "}
            <a href="/signup">Signup here</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
