import React from "react";
import css from "./ContactsListItems.module.css";
// import { getContactsItems } from "../../redux/contacts/selectors";
import { deleteContact } from "../../redux/contacts/operations";
import { useSelector, useDispatch } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

const ContactsListItems = () => {
  const filter = useSelector(selectFilteredContacts);

  // const filteredContacts = () =>
  //   contacts.filter((item) =>
  //     item.name.toLowerCase().includes(filter.toLowerCase())
  //   );

  const dispatch = useDispatch();
  const handleClick = (contact) => {
    dispatch(deleteContact(contact));
  };

  return (
    <ul className={css.list}>
      {filter.map((contact) => (
        <li className={css.listItems} key={contact.id}>
          <div>
            <p>{contact.name}</p>
            <p>{contact.number}</p>
          </div>
          <button onClick={() => handleClick(contact)} type="button">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsListItems;
