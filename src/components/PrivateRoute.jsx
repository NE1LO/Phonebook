import React from "react";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ component: Component }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return isLoggedIn ? <Component /> : <Navigate to="/Login" />;
};
