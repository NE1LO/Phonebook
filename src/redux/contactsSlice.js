import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [];

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({ name, number }) {
        return { payload: { name, number, id: nanoid() } };
      },
    },
    deleteContact: (state, action) => {
      const contactId = action.payload;
      state.filter((contact) => contact.id !== contactId);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
