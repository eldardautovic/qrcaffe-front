import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    loggedIn: false,
    caffeId: 0,
    caffeName: "",
  },
  reducers: {
    logIn: (state) => {
      state.loggedIn = true;
    },
    logInCafe: (state, action) => {
      state.loggedIn = true;
      state.caffeId = action.payload.id;
      state.caffeName = action.payload.name;
    },
    logOut: (state) => {
      state.loggedIn = false;
      state.caffeId = 0;
    },
  },
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
