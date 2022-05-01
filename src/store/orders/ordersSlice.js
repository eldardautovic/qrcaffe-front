import { createSlice } from "@reduxjs/toolkit";

export const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
  },
  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
  },
});

export const ordersActions = ordersSlice.actions;
export const ordersReducer = ordersSlice.reducer;
