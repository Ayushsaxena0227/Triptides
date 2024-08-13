import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/auth/Authcontext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppWrapper = () => {
  return (
    <BrowserRouter>
      <ToastContainer>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ToastContainer>
    </BrowserRouter>
  );
};

root.render(<AppWrapper />);
