import { createSelector } from "@reduxjs/toolkit";

const getContactsState = (state) => state.contacts;
const getFilteredContacts = (state) => state.filters;

export const getContactsItems = createSelector(
  [getContactsState],
  (contacts) => contacts.items
);

export const selectFilteredContacts = createSelector(
  [getFilteredContacts, getContactsItems],
  (filter, items) => {
    return items.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
