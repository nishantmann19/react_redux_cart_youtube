import React from "react";
import { Navigate } from "react-router-dom";
import Header from "../components/Header";

const PrivateRoute = ({ children }) => {
  const uuid = localStorage.getItem("uuid");
  return uuid?.length > 0 ? (
    <>
      <Header />
      {children}
    </>
  ) : (
    <Navigate to="/login" />
  );
};
export default PrivateRoute;
