import React, { useContext } from "react";
import { AuthContext } from "../context/auth/Authcontext";
import { Link } from "react-router-dom";
import "./styles/Navbar.css"; // Make sure this file has your styles

const Navbar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link className="navbar-link" to="/">
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" to="/services">
            Services
          </Link>
        </li>
        {isAuthenticated ? (
          <>
            <li className="navbar-item">
              <Link className="navbar-link" to="/search">
                Flight Search
              </Link>
            </li>
            <li className="navbar-item">
              <button className="navbar-link" onClick={logout}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li className="navbar-item">
              <Link className="navbar-link" to="/register">
                Register
              </Link>
            </li>
            <li className="navbar-item">
              <Link className="navbar-link" to="/login">
                Login
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
