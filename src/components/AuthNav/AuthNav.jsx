import React from "react";
import css from "./AuthNav.module.css";
import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
    <ul className={css.navigationList}>
      <li>
        <NavLink to="/login">
          <h2 className={css.title}>Log in</h2>
        </NavLink>
      </li>
      <li>
        <NavLink to="/register">
          <h2 className={css.title}>Register</h2>
        </NavLink>
      </li>
    </ul>
  );
};

export default AuthNav;
