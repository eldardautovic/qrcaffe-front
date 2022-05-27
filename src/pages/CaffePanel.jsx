import { useEffect, useRef, useState } from "react";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { logInCaffe } from "../store/user/userReducer";
import { usePersistantLogin } from "../hooks/usePersistantLogin";

import CaffeIndividualPanel from "../components/Header/CaffeIndividualPanel";
import Header from "../components/Header/Header";

import style from "./CaffePanel.module.css";

const CaffePanel = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const pw = useRef();

  const [ip, setIp] = useState("");

  const loggedIn = useSelector((state) => state.user.loggedIn);
  const name = useSelector((state) => state.user.caffeName);

  usePersistantLogin();

  const logInUser = (event) => {
    event.preventDefault();

    dispatch(logInCaffe(pw.current.value, ip, params.caffeId));
  };

  useEffect(() => {
    axios
      .get("https://geolocation-db.com/json/")
      .then((response) => {
        setIp(response.data.IPv4);
      })
      .catch((err) => alert(err.message));
  }, []);

  return (
    <>
      <div className={style.wrapper}>
        <Header />
        {!loggedIn && (
          <form onSubmit={logInUser} className={style.form}>
            <h1 className={style.header}>CAFFE PANEL</h1>
            <input
              type="password"
              placeholder="Password..."
              className={style.input}
              maxLength="24"
              ref={pw}
              autoComplete="false"
            />

            <div className={style.buttonContainer}>
              <button type="submit" className={style.button}>
                Log in
              </button>
            </div>
          </form>
        )}
      </div>
      {loggedIn && <CaffeIndividualPanel id={params.caffeId} name={name} />}
    </>
  );
};

export default CaffePanel;
