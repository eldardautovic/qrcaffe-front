import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    loggedIn: false,
  },
  reducers: {
    logIn: (state, action) => {
      state.loggedIn = true;
    },
    logOut: (state) => {
      state.admin = null;
    },
  },
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
