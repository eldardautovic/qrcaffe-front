import React, { useEffect } from "react";
import CaffeHeader from "./CaffeHeader";
import style from "./CaffeIndividualPanel.module.css";
import { io } from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../store/orders/ordersReducer";
import notificationSound from "../../assets/sounds/notification.mp3";
import Orders from "./Orders";

const CaffeIndividualPanel = ({ name, id }) => {
  const orders = useSelector((state) => state.orders.orders);
  const dispatch = useDispatch();

  const notification = new Audio(notificationSound);

  useEffect(() => {
    const socket = io(`http://localhost:1337`);
    socket.on("createdOrder", () => {
      dispatch(getOrders(id));
      notification.play();
    });

    socket.on("completedOrder", () => {
      dispatch(getOrders(id));
    });

    dispatch(getOrders(id));
  }, []);
  return (
    <div className={style.container}>
      <CaffeHeader name={name} id={id} />
      {orders.length > 0 &&
        orders.map((el) => {
          return <Orders key={el.id} order={el} />;
        })}
    </div>
  );
};

export default CaffeIndividualPanel;
