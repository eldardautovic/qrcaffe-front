import React from "react";
import style from "./Modal.module.css";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/user/userSlice";

const Modal = ({ coords, id }) => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(userActions.logOut());
  };

  return ReactDOM.createPortal(
    <div
      className={style.container}
      style={{ left: coords.left, top: coords.top }}
    >
      <Link to={`/caffe/${id}/izvjestaj`}>Izvjestaj</Link>
      <Link to={`/caffe/${id}/postavke`}>Podesavanja</Link>
      <h1 className={style.headling} onClick={logout}>
        Odjava
      </h1>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
