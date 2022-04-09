import { createSlice } from "@reduxjs/toolkit";

export const caffeSlice = createSlice({
  name: "caffes",
  initialState: {
    caffes: [],
  },
  reducers: {
    setCaffes: (state, action) => {
      state.caffes = action.payload;
    },

    addCaffe: (state, action) => {
      state.caffes.push(action.payload);
    },
  },
});

export const caffeActions = caffeSlice.actions;
export const caffeReducer = caffeSlice.reducer;
