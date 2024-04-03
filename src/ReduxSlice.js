import { createAction, createSlice, combineReducers } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: [],
  reducers: {
    addContact(state, action) {
      state.push({ ...action.payload, id: nanoid() });
    },
    deleteContact(state, action) {
      return state.filter((contact) => contact.id !== action.payload);
    },
  },
});

const inputSlice = createSlice({
  name: "input",
  initialState: "",
  reducers: {
    setInputValue(state, action) {
      return action.payload;
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const { setInputValue } = inputSlice.actions;

const rootReducer = combineReducers({
  contacts: contactsSlice.reducer,
  inputValue: inputSlice.reducer,
});

export default rootReducer;
