import React from "react";
import { Navigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../Footer/fotter";

const PrivateRoute = ({ children }) => {
  const uuid = localStorage.getItem("uuid");
  return uuid?.length > 0 ? (
    <>
      <Header />
      {children}
      <Footer />
    </>
  ) : (
    <Navigate to="/login" />
  );
};
export default PrivateRoute;
