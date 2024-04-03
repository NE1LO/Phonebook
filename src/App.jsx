import "./App.css";
import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addContact, deleteContact, setInputValue, fi } from "./ReduxSlice";

const KEY = "1j2n3kj1nsfk";

function App() {
  const dispatch = useDispatch();

  // const [inputValue, setInputValue] = useState("");
  // const [contacts, setContacts] = useState(() => {
  //   const data = JSON.parse(localStorage.getItem(KEY)) || [
  //     { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  //     { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  //     { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  //     { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  //   ];
  //   return data;
  // });

  // useEffect(() => {
  //   localStorage.setItem(KEY, JSON.stringify(contacts));
  // }, [inputValue, contacts]);

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const handleSubmit = (values, actions) => {
    dispatch(addContact({ ...values, id: nanoid() }));
    actions.resetForm();
  };

  const handleChangeInput = (e) => {
    setInputValue(`${e.target.value.trim()}`);
  };

  const handleFilterContacts = (id) => {
    dispatch(fil);
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} />
      <SearchBox value={inputValue} changeInput={handleChangeInput} />
      <ContactList
        contacts={handleFilterContacts()}
        deleteContact={handleDeleteContact}
      />
    </>
  );
}

export default App;
