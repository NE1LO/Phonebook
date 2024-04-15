import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "@mui/material/Button";
import css from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import toast from "react-hot-toast";
import * as Yup from "yup";

const validation = Yup.object().shape({
  email: Yup.string()
    .min(4, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(3, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => toast.success("Login was successful!"))
      .catch(() => toast.error("Something went wrong, try again"));
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={handleSubmit}
      validationSchema={validation}
    >
      <Form className={css.form}>
        <div className={css.inputBlock}>
          <div className={css.loginInputBlock}>
            <div className={css.errorMessage}>
              <ErrorMessage name="email" as="span" />
            </div>
            <Field
              className={css.input}
              type="email"
              name="email"
              placeholder="Your Email"
            />
          </div>
          <div className={css.loginInputBlock}>
            <div className={css.errorMessage}>
              <ErrorMessage name="password" as="span" />
            </div>
            <Field
              type="password"
              name="password"
              placeholder="Your Password"
              className={css.input}
            />
          </div>
        </div>
        <Button
          type="submit"
          style={{ backgroundColor: "", color: "" }}
          className={css.btn}
          variant="contained"
        >
          Log in
        </Button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
