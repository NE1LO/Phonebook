import React from "react";
import css from "./ContactsListItems.module.css";
import { MdDelete } from "react-icons/md";
// import { getContactsItems } from "../../redux/contacts/selectors";
import { deleteContact } from "../../redux/contacts/operations";
import { useSelector, useDispatch } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import toast from "react-hot-toast";

const ContactsListItems = () => {
  const filter = useSelector(selectFilteredContacts);

  // const filteredContacts = () =>
  //   contacts.filter((item) =>
  //     item.name.toLowerCase().includes(filter.toLowerCase())
  //   );

  const dispatch = useDispatch();
  const handleClick = (contact) => {
    dispatch(deleteContact(contact))
      .unwrap()
      .then(() => toast.success("contact deleted"))
      .catch(() => toast.error("Opps, try again"));
  };

  return (
    <ul className={css.list}>
      {filter.map((contact) => (
        <li className={css.listItems} key={contact.id}>
          <div className={css.userBlock}>
            <p>{contact.name}</p>
            <p>{contact.number}</p>
          </div>
          <button
            className={css.btn}
            onClick={() => handleClick(contact)}
            type="button"
          >
            <MdDelete
              style={{
                width: "30px",
                height: "30px",
              }}
            />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsListItems;
