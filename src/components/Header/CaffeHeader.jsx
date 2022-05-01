import React from "react";
import style from "./CaffeHeader.module.css";

const CaffeHeader = ({ name }) => {
  return (
    <div className={style.header}>
      <h1>Caffe panel {name}</h1>
      <div className={style.profile}>
        <div
          className={style.pic}
          style={{
            backgroundImage: `url(https://ui-avatars.com/api/?name=${name})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
    </div>
  );
};

export default CaffeHeader;
