import { useDispatch } from "react-redux";
import jwtDecode from "jwt-decode";
import { useSelector } from "react-redux";
import axios from "axios";
import { userActions } from "../store/user/userSlice";

let timeOut;

export const usePersistantLogin = () => {
  const isLoggedIn = useSelector((state) => state.user.loggedIn);

  const dispatch = useDispatch();
  const token = localStorage.getItem("tokenId");

  if (token !== null && !isLoggedIn) {
    const decodedToken = jwtDecode(token);

    const tokenExpiration = decodedToken.exp * 1000;
    const currentDateObject = new Date();
    const timeInMiliseconds = currentDateObject.getTime();

    const tokenExpiresIn = tokenExpiration - timeInMiliseconds;

    clearTimeout(timeOut);

    console.log("EXP", tokenExpiration);
    console.log("CURRENT", tokenExpiresIn);

    if (tokenExpiresIn > 60000) {
      timeOut = setTimeout(() => {
        dispatch(userActions.logOut());
      }, tokenExpiresIn);

      axios
        .get(`http://localhost:1337/login/verify/${decodedToken.caffeId}`)
        .then((response) => {
          dispatch(
            userActions.logInCafe({
              id: decodedToken.caffeId,
              name: decodedToken.caffeName,
            })
          );
        })
        .catch((err) => {});
    }
  }
};
