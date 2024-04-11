import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { refreshUser } from "../redux/auth/operations";
import { getContactsItems } from "../redux/contacts/selectors";
import { getIsRefreshing } from "../redux/auth/selectors";
//---------------------------------------------------
// IMPORT COMPONENTS---------------------------------
//---------------------------------------------------
import { Loader } from "./Loader/Loader";
import Loyout from "./Loyout/Loyout";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/Register/Register";
import Contacts from "../pages/Contacts/Contacts";

function App() {
  const isRefreshing = useSelector(getIsRefreshing);
  const contactsItems = useSelector(getContactsItems);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
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
