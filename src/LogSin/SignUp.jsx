import React, { useState } from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
import "./Signup.css"; 
import API_BASE_URL from "../api";

const SignUp = () => {
  
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    mobile: "",
    address: "",
    image: ""
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
        `${API_BASE_URL}/api/auth/signup/`,
        formData
      );
      console.log(response.data.message);
      if (response.data.success) {
        setMessage("Signup successful!");
        setTimeout(()=>{
          navigate("/login")
        },2000);
      } else {
        setMessage(response.data.message || "Signup failed. Try again.");
      }
    } catch (error) {
      console.error("Error signing up:", error);
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
        // Handle network or other errors
        setMessage("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="outer">
      <div className="su-container">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="lg-input-group">
            <label className="label">Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="input"
            />
          </div>
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
          <button type="submit" className="button">
            Signup
          </button>
        </form>
        {message && <p className="message">{message}</p>}
        <p className="login-link">
          Already registered?<Link to="/login"> <a href="/login">Login here</a></Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
