import React from "react";
import ContactsListItems from "../ContactListItems/ContactsListItems";
import AddContactForm from "../AddContactForm/AddContactForm";

const ContactsList = () => {
  return (
    <div>
      <ul>
        <li>
          <AddContactForm />
        </li>
        <li>
          <ContactsListItems />
        </li>
      </ul>
    </div>
  );
};

export default ContactsList;
