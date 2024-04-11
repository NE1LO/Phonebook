import React from "react";
import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../redux/auth/selectors";

const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <ul className={css.navigationList}>
      <li>
        <NavLink to="/" className={css.link}>
          <h2 className={css.title}>Home</h2>
        </NavLink>
      </li>
      {isLoggedIn && (
        <li>
          <NavLink to="/Contacts" className={css.link}>
            <h2 className={css.title}>Contacts</h2>
          </NavLink>
        </li>
      )}
    </ul>
  );
};

export default Navigation;
