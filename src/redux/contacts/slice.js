import { createSlice } from "@reduxjs/toolkit";
import { logOut } from "../auth/operations";
import { getContacts, addContact, deleteContact } from "./operations";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
  },
  extraReducers: (bilder) =>
    bilder
      .addCase(getContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(logOut.fulfilled, (state) => {
        state.items = [];
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index !== -1) {
          state.items.splice(index, 1);
        }
      }),
});

export default contactsSlice.reducer;
