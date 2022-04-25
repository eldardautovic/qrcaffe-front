import axios from "axios";
import { userActions } from "./userSlice";
import jwtDecode from "jwt-decode";
export const logInAction = (password) => {
  return (dispatch) => {
    axios
      .post("http://localhost:1337/login/admin", { pw: password })
      .then((response) => {
        dispatch(userActions.logIn());
      })
      .catch((err) => alert(err));
  };
};

export const logInCaffe = (password, ip, id) => {
  return (dispatch) => {
    axios
      .post(`http://localhost:1337/login/${id}`, {
        pass: password,
        ip: ip,
      })
      .then((response) => {
        console.log(response.data);
        const decodedToken = jwtDecode(response.data.token);

        dispatch(
          userActions.logInCafe({
            id: decodedToken.caffeId,
            name: decodedToken.caffeName,
          })
        );

        localStorage.setItem("tokenId", response.data.token);
      })
      .catch((err) => console.log(err));
  };
};
