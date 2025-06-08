// src/components/ProtectedAdmin.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const PASSWORD = "123456";

const ProtectedAdmin = ({ children }) => {
  const stored = sessionStorage.getItem("admin-auth");

  if (stored === PASSWORD) {
    return children;
  }

  const userInput = prompt("Enter Admin Password:");

  if (userInput === PASSWORD) {
    sessionStorage.setItem("admin-auth", userInput);
    return children;
  }

  alert("Incorrect password. Redirecting...");
  return <Navigate to="/" replace />;
};

export default ProtectedAdmin;
