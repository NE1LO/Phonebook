import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const setAuthHeader = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common["Authorization"] = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post("/users/signup", userData);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logIn = createAsyncThunk(
  "auth/logIn",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post("/users/login", userData);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logOut = createAsyncThunk("auth/logOut", async (_, thunkAPI) => {
  try {
    await axios.post("/users/logout");
    clearAuthHeader();
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refreshUser",
  async (_, thunkAPI) => {
    try {
      const reduxState = thunkAPI.getState();
      const token = reduxState.auth.token;
      if (!token) {
        throw new Error("Токен авторизації недоступний");
      }
      setAuthHeader(token);
      const response = await axios.get("/users/current");
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue("Помилка перезавантаження користувача");
    }
  },
  {
    condition: (_, { getState }) => {
      const reduxState = getState();
      const savedToken = reduxState.auth.token;
      return savedToken !== null;
    },
  }
);
