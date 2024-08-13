import React, { useState, useContext } from "react";
import { AuthContext } from "../context/auth/Authcontext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./styles/Register.css";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;
  const { setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", res_data.token);
        toast.success("Registration successful! Please log in.");
        navigate("/login");
      } else {
        toast.error(res_data.message);
      }
    } catch (err) {
      console.error("Error response:", err.response);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="register-container">
      <h1>Register</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={onChange}
          required
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={onChange}
          required
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          required
          placeholder="Password"
        />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
