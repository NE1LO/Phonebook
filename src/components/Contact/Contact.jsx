import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();

  const deleteContacts = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.contactBlock}>
      <ul className={css.list}>
        <li className={css.listItemName}>{name}</li>
        <li className={css.listItemNumber}>{number}</li>
      </ul>
      <button onClick={deleteContacts} id={id} type="button">
        Delete
      </button>
    </div>
  );
};

export default Contact;
