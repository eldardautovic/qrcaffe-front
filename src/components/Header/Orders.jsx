import React from "react";
import { useDispatch } from "react-redux";
import { finishOrders } from "../../store/orders/ordersReducer";
import style from "./Orders.module.css";

const Orders = ({ order }) => {
  const dispatch = useDispatch();
  const orderList = ["Kafa", "Piva", "Kola"];

  const finishOrder = () => {
    dispatch(finishOrders(order.id, order.caffeId));
  };

  return (
    <div className={style.container}>
      <div className={style.finishOrders}>
        <h1 className={style.exit} onClick={finishOrder}>
          Zavrsi narudzbu
        </h1>
      </div>
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
