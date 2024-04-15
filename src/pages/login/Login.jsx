import React from "react";
import css from "./Login.module.css";
import LoginForm from "../../components/LoginForm/LoginForm";

const Login = () => {
  return (
    <div className={css.wrapper}>
      <LoginForm />
    </div>
  );
};

export default Login;
