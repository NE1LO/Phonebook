import React from "react";
import ContactsListItems from "../ContactListItems/ContactsListItems";
import AddContactForm from "../AddContactForm/AddContactForm";
import FilterForm from "../FilterForm/FilterForm";

const ContactsList = () => {
  return (
    <div>
      <ul>
        <li>
          <AddContactForm />
        </li>
        <li>
          <FilterForm />
        </li>
        <li>
          <ContactsListItems />
        </li>
      </ul>
    </div>
  );
};

export default ContactsList;
