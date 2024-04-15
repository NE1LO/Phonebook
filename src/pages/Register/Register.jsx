import React from "react";
import css from "./Register.module.css";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

const Register = () => {
  return (
    <div className={css.wrapper}>
      <RegistrationForm />
    </div>
  );
};

export default Register;
