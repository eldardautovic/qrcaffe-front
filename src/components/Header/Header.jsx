import React from "react";
import { FaMugHot } from "react-icons/fa";
import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.wrapper}>
      <FaMugHot fontSize={35} className={style.icon} />
      <h1>QR Caffee</h1>
    </div>
  );
};

export default Header;
