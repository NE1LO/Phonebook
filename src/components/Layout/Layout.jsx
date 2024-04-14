import React from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";

const Loyout = () => {
  return (
    <div>
      <AppBar />
      <Outlet />
    </div>
  );
};

export default Loyout;
