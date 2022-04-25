import React from "react";
import style from "./CaffeIndividualPanel.module.css";
const CaffeIndividualPanel = ({ name, id }) => {
  return (
    <div className={style.container}>
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
    </div>
  );
};

export default CaffeIndividualPanel;
