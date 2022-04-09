import { configureStore } from "@reduxjs/toolkit";
import { caffeReducer } from "./caffes/caffeSlice";
import { userReducer } from "./user/userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    caffe: caffeReducer,
  },
});
