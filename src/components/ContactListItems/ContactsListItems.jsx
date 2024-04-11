import React from "react";
import css from "./ContactsListItems.module.css";
import { getContactsItems } from "../../redux/contacts/selectors";
import { deleteContact } from "../../redux/contacts/operations";
import { useSelector, useDispatch } from "react-redux";

const ContactsListItems = () => {
  const contacts = useSelector(getContactsItems);

  const dispatch = useDispatch();
  const handleClick = (contact) => {
    console.log(contact);
    dispatch(deleteContact(contact));
  };

  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
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
