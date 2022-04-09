import axios from "axios";
import { userActions } from "./userSlice";

export const logInAction = (password) => {
  return (dispatch) => {
    axios
      .post("http://localhost:1337/login", { pw: password })
      .then((response) => {
        dispatch(userActions.logIn());
      })
      .catch((err) => alert(err));
  };
};
