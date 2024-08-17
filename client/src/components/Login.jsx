import React, { useState, useContext } from "react";
import { AuthContext } from "../context/auth/Authcontext";
import "./styles/Login.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:5000/api/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();
      console.log("response from server", res_data.message);

      if (res_data.token) {
        localStorage.setItem("token", res_data.token);
        login(res_data.user, res_data.token); // Pass user and token to login
        navigate("/search");
        toast.success("Login successful!");
      } else {
        console.error("Login failed: No token received");
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
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
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
