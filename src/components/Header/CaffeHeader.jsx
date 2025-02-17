import { useState } from "react";

import Modal from "./Modal";

import { FaRegArrowAltCircleRight as Arrow } from "react-icons/fa";

import style from "./CaffeHeader.module.css";

const CaffeHeader = ({ name, id }) => {
  const [opened, setOpened] = useState(false);
  const [coords, setCoords] = useState({ left: 0.0, top: 0.0 });

  return (
    <div className={style.header}>
      <h1>
        Caffe panel <Arrow fontSize="1.2rem" /> {name}
      </h1>
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
