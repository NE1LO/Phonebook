import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const setAuthHeader = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

// Create contact
export const addContact = createAsyncThunk(
  "auth/createContact",
  async (contactData, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", contactData);
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

// GET CONTATCTS
export const getContacts = createAsyncThunk(
  "auth/getContacts",
  async (_, thunkAPI) => {
    try {
      const stateRedux = thunkAPI.getState();
      const stateToken = stateRedux.auth.token;
      setAuthHeader(stateToken);
      const response = await axios.get("/contacts");
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
// delete contact
export const deleteContact = createAsyncThunk(
  "auth/deleteContact",
  async (contact, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contact.id}`);
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
