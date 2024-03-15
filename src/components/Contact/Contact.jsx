import css from "./Contact.module.css";

const Contact = ({ contact: { name, number, id }, deleteContact }) => {
  return (
    <div className={css.contactBlock}>
      <ul className={css.list}>
        <li>{name}</li>
        <li>{number}</li>
      </ul>
      <button onClick={deleteContact} id={id} type="button">
        Delete
      </button>
    </div>
  );
};

export default Contact;
