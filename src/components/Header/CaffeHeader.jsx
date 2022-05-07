import React, { useState } from "react";
import style from "./CaffeHeader.module.css";
import Modal from "./Modal";

const CaffeHeader = ({ name, id }) => {
  const [opened, setOpened] = useState(false);
  const [coords, setCoords] = useState({ left: 0.0, top: 0.0 });

  return (
    <div className={style.header}>
      <h1>Caffe panel {name}</h1>
      <div className={style.profile}>
        <div
          className={style.pic}
          onClick={(e) => {
            const rect = e.target.getBoundingClientRect();
            setCoords({
              left: rect.x - 100,
              top: rect.y + 40,
            });
            setOpened(!opened);
          }}
          style={{
            backgroundImage: `url(https://ui-avatars.com/api/?name=${name})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        {opened && <Modal coords={coords} id={id} />}
      </div>
    </div>
  );
};

export default CaffeHeader;
