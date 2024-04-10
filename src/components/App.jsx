import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
// import { fetchContacts } from "../redux/contactsOps";
// import ContactForm from "./ContactForm/ContactForm";
// import ContactList from "./ContactList/ContactList";
// import SearchBox from "./SearchBox/SearchBox";
// import { Loader } from "./Loader/Loader";
import Loyout from "./Loyout/Loyout";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/Register/Register";
import Contacts from "../pages/Contacts/Contacts";

function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <>
      <Loyout />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="Contacts" element={<Contacts />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Register" element={<Register />}></Route>
      </Routes>
    </>
  );
}

export default App;
