import React from "react";
import ContactsList from "../../components/ContactsList/ContactsList";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getContacts } from "../../redux/contacts/operations";
import { refreshUser } from "../../redux/auth/operations";

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div>
      <ContactsList />
    </div>
  );
};

export default Contacts;
