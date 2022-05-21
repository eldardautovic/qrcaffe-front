import React from "react";
import style from "./Modal.module.css";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
const Modal = ({ coords, id }) => {
  return ReactDOM.createPortal(
    <div
      className={style.container}
      style={{ left: coords.left, top: coords.top }}
    >
      <Link to={`/caffe/${id}/izvjestaj`}>Izvjestaj</Link>
      <Link to={`/postavke/${id}`}>Podesavanja</Link>
      <Link to={`/logout`}>Odjava</Link>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
