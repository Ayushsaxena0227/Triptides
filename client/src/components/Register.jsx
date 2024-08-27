import React, { useState, useContext } from "react";
import { AuthContext } from "../context/auth/Authcontext";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import "./styles/Register.css";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

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
        setModalMessage("Registration successful! Please log in.");
        setIsModalOpen(true);
        setTimeout(() => navigate("/login"), 2000); // Delay navigation for modal visibility
      } else {
        setModalMessage(res_data.message);
        setIsModalOpen(true);
      }
    } catch (err) {
      console.error("Error response:", err.response);
      setModalMessage("An error occurred. Please try again.");
      setIsModalOpen(true);
    }
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="register-container">
      <h1>Register And</h1>
      <h2>Fly High With Us!</h2>
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
      <Modal isOpen={isModalOpen} onClose={closeModal} message={modalMessage} />
    </div>
  );
};

export default Register;
