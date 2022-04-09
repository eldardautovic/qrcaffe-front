import React, { useRef } from "react";
import { logInAction } from "../store/user/userReducer";
import { useDispatch, useSelector } from "react-redux";
import style from "./Admin.module.css";
import Form from "../components/Header/Form";
import Caffes from "../components/Header/Caffes";

const Admin = () => {
  const loggedIn = useSelector((state) => state.user.loggedIn);
  const dispatch = useDispatch();

  const pw = useRef();

  const logInUser = (event) => {
    event.preventDefault();
    dispatch(logInAction(pw.current.value));
  };

  return (
    <div className={style.wrapper}>
      {!loggedIn && <Form logInUser={logInUser} pw={pw} />}

      {loggedIn && (
        <div className={style.container}>
          <h1>Admin panel </h1>
          <p>
            Ovo je mjesto gdje mozete da dodate novi kafic, izmjenite postojeci{" "}
            <br /> ili jednostavno da pratite informacije o istima.
          </p>
          <Caffes />
        </div>
      )}
    </div>
  );
};

export default Admin;
