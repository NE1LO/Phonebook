import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    setFilter: {
      reducer(_, action) {
        return action.payload;
      },
      prepare(filter) {
        return { payload: filter };
      },
    },
  },
});

export default filterSlice;
export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
