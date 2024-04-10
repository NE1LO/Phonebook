import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/slice";
// import { contactsReducer } from "./contactsSlice";
// import { filterReducer } from "./filterSlice";

const rootReducer = combineReducers({
  auth: authSlice,
  // contacts: contactsReducer,
  // filters: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
