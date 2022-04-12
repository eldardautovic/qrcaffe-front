import axios from "axios";
import { caffeActions } from "./caffeSlice";

export const createCaffe = (ip, name, pass) => {
  return (dispatch) => {
    axios
      .post("http://localhost:1337/caffes", {
        ip: ip,
        pw: pass,
        name: name,
        signature: "eld4Nev0lj4",
      })
      .then((response) => {
        const obj = {
          id: response.data.id,
          ip: ip,
          name: name,
        };

        alert("Novi kafic dodan je uspjesno.");
        dispatch(caffeActions.addCaffe(obj));
      })
      .catch((err) => alert(err));
  };
};

export const getCaffes = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:1337/caffes")
      .then((response) => {
        dispatch(caffeActions.setCaffes(response.data));
      })
      .catch((err) => alert(err));
  };
};

export const getOrders = (id) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:1337/orders/${id}`)
      .then((response) => {
        dispatch(caffeActions.setStatement(response.data));
      })
      .catch((err) => alert(err));
  };
};
