import { configureStore } from "@reduxjs/toolkit";
import { caffeReducer } from "./caffes/caffeSlice";
import { ordersReducer } from "./orders/ordersSlice";
import { userReducer } from "./user/userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    caffe: caffeReducer,
    orders: ordersReducer,
  },
});
