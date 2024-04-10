import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const register = createAsyncThunk("auth/register", async (userData) => {
  try {
    const response = await axios.post("/users/signup", userData);
    console.log(response);
    return response.data;
  } catch (error) {
    return 0;
  }
});
