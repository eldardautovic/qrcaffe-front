import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./Caffes.module.css";
import NewCaffe from "./NewCaffe";
import { useSelector } from "react-redux";

const Caffes = () => {
  const caffes = useSelector((state) => state.caffe.caffes);

  return (
    <div className={style.wrapper}>
      <NewCaffe />
      <h1>Trenutni kafici: </h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>IP</th>
          </tr>
        </thead>
        <tbody>
          {caffes &&
            caffes.map((el) => {
              return (
                <tr>
                  <td>{el.id}</td>
                  <td>{el.name}</td>
                  <td>{el.ip}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Caffes;
