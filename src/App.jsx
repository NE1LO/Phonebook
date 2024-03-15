import "./App.css";
import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { nanoid } from "nanoid";
const KEY = "1j2n3kj1nsfk";

function App() {
  // ==============================================================
  const [contacts, setContacts] = useState(() => {
    const data = JSON.parse(localStorage.getItem(KEY)) || [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ];
    return data;
  });

  const [inputValue, setInputValue] = useState("");
  // ==============================================================
  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(contacts));
  }, [inputValue, contacts]);

  const deleteContact = (e) => {
    setContacts(contacts.filter((item) => item.id !== e.target.id));
  };

  const handleSubmit = (values, actions) => {
    setContacts([...contacts, { ...values, id: nanoid() }]);
    actions.resetForm();
  };

  const changeInput = (e) => {
    setInputValue(`${e.target.value.trim()}`);
  };

  const filterContacts = () =>
    contacts.filter((item) =>
      item.name.toLowerCase().includes(inputValue.toLowerCase())
    );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} />
      <SearchBox values value={inputValue} changeInput={changeInput} />
      <ContactList contacts={filterContacts()} deleteContact={deleteContact} />
    </>
  );
}

export default App;
