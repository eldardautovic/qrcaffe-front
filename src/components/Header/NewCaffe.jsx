import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import style from "./NewCaffe.module.css";
import { createCaffe } from "../../store/caffes/caffeReducer";
const NewCaffe = () => {
  const dispatch = useDispatch();

  const ip = useRef();
  const name = useRef();
  const pw = useRef();

  const createNewCaffe = (event) => {
    event.preventDefault();

    dispatch(
      createCaffe(ip.current.value, name.current.value, pw.current.value)
    );

    ip.current.value = "";
    name.current.value = "";
    pw.current.value = "";
  };

  return (
    <div className={style.wrapper}>
      <h1 className={style.header}>Dodaj novi kafic: </h1>
      <form className={style.form} onSubmit={createNewCaffe}>
        <label className={style.label}>IP adress:</label>
        <input
          type="text"
          placeholder="IP adress..."
          className={style.input}
          maxLength="64"
          ref={ip}
        />
        <label className={style.label}>Name:</label>
        <input
          type="text"
          placeholder="Name..."
          className={style.input}
          maxLength="64"
          ref={name}
        />
        <label className={style.label}>Password:</label>
        <input
          type="password"
          placeholder="Password..."
          className={style.input}
          maxLength="24"
          ref={pw}
        />

        <div className={style.buttonContainer}>
          <button type="submit" className={style.button}>
            Dodaj novi kafic
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewCaffe;
