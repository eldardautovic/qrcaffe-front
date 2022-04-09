import React from "react";
import style from "./Form.module.css";

const Form = ({ logInUser, pw }) => {
  return (
    <div className={style.wrapper}>
      <form onSubmit={logInUser} className={style.form}>
        <h1 className={style.header}>ADMIN PANEL</h1>
        <input
          type="password"
          placeholder="Password..."
          className={style.input}
          maxLength="24"
          ref={pw}
        />

        <div className={style.buttonContainer}>
          <button type="submit" className={style.button}>
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
