import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
const validation = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const ContactForm = ({ handleSubmit }) => {
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={validation}
    >
      <Form className={css.form}>
        <div>
          <label className={css.label}>
            Name
            <Field type="text" name="name" />
          </label>
          <ErrorMessage name="name" as="span" />
        </div>
        <div>
          <label className={css.label}>
            Number
            <Field type="text" name="number" />
          </label>
          <ErrorMessage name="number" as="span" />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
