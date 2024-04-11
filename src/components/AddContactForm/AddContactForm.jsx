import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./AddContactForm.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const validation = Yup.object().shape({
  name: Yup.string().min(3, "Short!").max(50, "Long!").required("Required"),
  number: Yup.string().min(3, "Short!").max(50, "Long!").required("Required"),
});

const AddContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validation}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.inputBlock}>
          <div className={css.block}>
            <div className={css.errorMessage}>
              <ErrorMessage name="name" as="span" />
            </div>
            <Field
              className={css.input}
              type="text"
              name="name"
              placeholder="Name"
            />
          </div>
          <div className={css.block}>
            <div className={css.errorMessage}>
              <ErrorMessage name="number" as="span" />
            </div>
            <Field
              className={css.input}
              type="text"
              name="number"
              placeholder="Number"
            />
          </div>
        </div>

        <button className={css.btnAdd} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default AddContactForm;
