import React from "react";
import css from "./Login.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validation = Yup.object().shape({
  name: Yup.string()
    .min(4, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(3, "Too Short!")
    .max(12, "Too Long!")
    .required("Required"),
});

const Login = () => {
  return (
    <Formik
      initialValues={{ name: "", password: "" }}
      //   onSubmit={handleSubmit}
      validationSchema={validation}
    >
      <Form className={css.form}>
        <div className={css.inputBlock}>
          <div className={css.loginInputBlock}>
            <div className={css.errorMessage}>
              <ErrorMessage name="name" as="span" />
            </div>
            <Field
              className={css.input}
              type="name"
              name="name"
              placeholder="name"
            />
          </div>
          <div className={css.loginInputBlock}>
            <div className={css.errorMessage}>
              <ErrorMessage name="password" as="span" />
            </div>
            <Field
              type="password"
              name="password"
              placeholder="Password"
              className={css.input}
            />
          </div>
        </div>
        <button className={css.btnLogin} type="submit">
          Log in
        </button>
      </Form>
    </Formik>
  );
};

export default Login;
