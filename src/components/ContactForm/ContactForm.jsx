import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/getTasksApi";

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

const ContactForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, action) => {
    console.log(values);
    dispatch(addContact(values));
    action.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={validation}
    >
      <Form className={css.form}>
        <div className={css.inputBlock}>
          <div>
            <label className={css.label}>
              Name
              <Field className={css.input} type="text" name="name" />
            </label>
            <ErrorMessage name="name" as="span" />
          </div>
          <div>
            <label className={css.label}>
              Number
              <Field className={css.input} type="text" name="number" />
            </label>
            <ErrorMessage name="number" as="span" />
          </div>
        </div>

        <button className={css.addContactBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
