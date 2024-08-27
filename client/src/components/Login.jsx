import React, { useState, useContext } from "react";
import { AuthContext } from "../context/auth/Authcontext";
import "./styles/Login.css";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

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
        setModalMessage("Login successful! Redirecting...");
        setIsModalOpen(true);
        setTimeout(() => navigate("/search"), 2000); // Delay navigation for modal visibility
      } else {
        setModalMessage("Login failed. Please try again.");
        setIsModalOpen(true);
      }
    } catch (err) {
      console.error(err.message);
      setModalMessage("An error occurred. Please try again.");
      setIsModalOpen(true);
    }
  };

  const closeModal = () => setIsModalOpen(false);

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
      <Modal isOpen={isModalOpen} onClose={closeModal} message={modalMessage} />
    </div>
  );
};

export default Login;
