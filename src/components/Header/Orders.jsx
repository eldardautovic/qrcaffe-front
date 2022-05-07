import React from "react";
import style from "./Orders.module.css";

const Orders = ({ order }) => {
  const orderList = ["Kafa", "Piva", "Kola"];

  return (
    <div className={style.container}>
      <h1 className={style.exit}>Zavrsi narudzbu</h1>
      <div className={style.header}>
        <h1 className={style.header}>Stol {order.tableId}</h1>
        <h4 className={style.timestamp}>{order.timestamp}</h4>
      </div>
      {orderList.map((el, i) => {
        return (
          <p key={i} className={style.content}>
            {el}
          </p>
        );
      })}
      <h4 className={style.note}>Napomena: </h4>
      <p className={style.notepara}>{order.note}</p>
    </div>
  );
};

export default Orders;
