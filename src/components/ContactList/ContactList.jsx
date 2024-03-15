import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, deleteContact }) => {
  console.log(contacts);
  return (
    <ul className={css.numberList}>
      {contacts.map((value) => (
        <li key={value.id} className={css.numberlistItem}>
          <Contact contact={value} deleteContact={deleteContact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
