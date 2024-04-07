import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchContacts } from "./redux/contactsOps";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { Loader } from "./components/Loader/Loader";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const loading = useSelector((state) => state.contacts.loading);

  return (
    <>
      <h1 style={{ fontSize: "40px" }}>Phonebook</h1>
      {loading && <Loader />}
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
}

export default App;
