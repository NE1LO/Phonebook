import React from "react";
import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <ul className={css.navigationList}>
      <li>
        <NavLink to="/" className={css.link}>
          <h2 className={css.title}>Home</h2>
        </NavLink>
      </li>
      <li>
        <NavLink to="/Contacts" className={css.link}>
          <h2 className={css.title}>Contacts</h2>
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
