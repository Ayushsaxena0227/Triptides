import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/auth/Authcontext";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
// import "./components/styles/global.css"; // Import the global CSS

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppWrapper = () => {
  return (
    <BrowserRouter>
      <PayPalScriptProvider
        options={{
          "client-id":
            "Ae4uimRv_Vuo_SnZHo6KktkUz9Z3Px3PQLB9_ksbHTR9SGsSKM4ps-z5mw0dbLYUqBPra7vMOJDj--IK",
        }}
      >
        <AuthProvider>
          <App />
        </AuthProvider>
      </PayPalScriptProvider>
    </BrowserRouter>
  );
};

root.render(<AppWrapper />);
