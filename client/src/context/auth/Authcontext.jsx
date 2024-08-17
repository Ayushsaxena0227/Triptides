import React, { createContext, useReducer } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const AuthContext = createContext();

const initialState = {
  isAuthenticated: false,
  user: { name: "", email: "", id: "" },
  token: localStorage.getItem("token") || "",
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        user: { name: "", email: "", id: "" },
        token: "",
      };
    case "SET_USER":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log("Token being sent:", token); // Debugging

        if (!token) {
          throw new Error("No token found");
        }

        const response = await fetch("http://localhost:5000/api/users/user", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": token, // Ensure this matches your backend header name
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user");
        }

        const data = await response.json();
        setUser(data);
        console.log("Fetched user:", data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);

  const login = (user, token) => {
    localStorage.setItem("token", token);
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: { user, token },
    });
    console.log("User logged in:", user);
  };

  const logout = () => {
    localStorage.removeItem("token");
    dispatch({ type: "LOGOUT" });
    navigate("/login");
    console.log("User logged out");
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
