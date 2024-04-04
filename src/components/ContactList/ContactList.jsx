import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { getContacts, getFilters } from "../../redux/selectors";
import { useSelector } from "react-redux";

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilters);

  const filterContacts = () =>
    contacts.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <ul className={css.numberList}>
      {filterContacts().map((contact) => {
        return (
          <li key={contact.id} className={css.numberistItem}>
            <Contact contact={contact} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
