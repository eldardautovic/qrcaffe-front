import { ordersActions } from "./ordersSlice";
import axios from "axios";
export const getOrders = (id) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:1337/orders/${id}`)
      .then((response) => {
        dispatch(ordersActions.setOrders(response.data));
      })
      .catch((err) => alert(err));
  };
};
