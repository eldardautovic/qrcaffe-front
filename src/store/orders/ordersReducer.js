import { ordersActions } from "./ordersSlice";
import axios from "axios";
export const getOrders = (id) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:1337/orders/${id}`, {
        headers: { BearerToken: localStorage.getItem("tokenId") },
      })
      .then((response) => {
        dispatch(ordersActions.setOrders(response.data));
      })
      .catch((err) => alert(err));
  };
};

export const getStatement = (id) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:1337/orders/caffe-statement/${id}`, {
        headers: { BearerToken: localStorage.getItem("tokenId") },
      })
      .then((response) => {
        dispatch(ordersActions.setOrders(response.data));
      })
      .catch((err) => alert(err));
  };
};

export const finishOrders = (id) => {
  return (dispatch) => {
    axios
      .put(
        `http://localhost:1337/orders/${id}`,
        { id: id },
        {
          headers: { BearerToken: localStorage.getItem("tokenId") },
        }
      )
      .then((response) => {
        alert(response.data);
      })
      .catch((err) => alert(err));
  };
};
