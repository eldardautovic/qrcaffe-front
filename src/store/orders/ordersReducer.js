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

export const finishOrders = (id, caffeId) => {
  return (dispatch) => {
    axios
      .put(`http://localhost:1337/orders/${id}`)
      .then((response) => {
        alert("Uspjesno zavrsena narudzba");
      })
      .catch((err) => alert(err));
  };
};
