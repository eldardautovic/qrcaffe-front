import React from "react";
import style from "./Caffes.module.css";
import NewCaffe from "./NewCaffe";
import { useSelector } from "react-redux";
import { BsFillPencilFill } from "react-icons/bs";
import { Link, Outlet } from "react-router-dom";

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
            <th>EDIT</th>
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
                  <td>
                    <Link to={`/ucp/${el.id}`} key={el.id}>
                      <BsFillPencilFill fontSize={24} />
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <Outlet />
    </div>
  );
};

export default Caffes;
