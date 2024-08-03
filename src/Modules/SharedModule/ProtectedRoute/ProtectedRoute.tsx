import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ loginData, children }) {
  if (localStorage.getItem("userToken") || loginData) {
    return children;
  } else {
    return <Navigate to={"/login"}></Navigate>;
  }
}
