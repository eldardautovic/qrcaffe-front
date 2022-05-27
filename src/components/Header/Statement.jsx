import React from "react";
import style from "./Statement.module.css";
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoMdCheckmark, IoMdClose } from "react-icons/io";
import { AiOutlineRollback } from "react-icons/ai";
import { getOrders } from "../../store/caffes/caffeReducer";
import Header from "./Header";
const Statement = () => {
  const orders = useSelector((state) => state.caffe.caffeStatement);

  const params = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders(params.caffeId));
  }, []);

  return (
    <div>
      <Header />
      <Link to="/ucp/">
        <AiOutlineRollback fontSize={24} className={style.icon} />
      </Link>
      <h1 className={style.header}>Izvjestaj:</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Sadrzaj</th>
            <th>Vremenski pecat</th>
            <th>Napomena</th>
            <th>Zavrsena</th>
          </tr>
        </thead>
        <tbody>
          {orders.length > 0 &&
            orders.map((el) => {
              return (
                <tr>
                  <td>{el.id}</td>
                  <td>{el.content}</td>
                  <td>{el.timestamp}</td>
                  <td>{el.note}</td>
                  <td>
                    {el.zavrsena ? (
                      <IoMdCheckmark fontSize={22} style={{ color: "green" }} />
                    ) : (
                      <IoMdClose fontSize={22} style={{ color: "red" }} />
                    )}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Statement;
