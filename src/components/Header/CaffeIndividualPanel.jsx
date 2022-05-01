import React, { useEffect, useState } from "react";
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
    socket.on("createdOrder", (sock) => {
      dispatch(getOrders(id));
      notification.play();
    });

    dispatch(getOrders(id));
  }, []);

  useEffect(() => {
    console.log(orders);
  }, [orders]);

  return (
    <div className={style.container}>
      <CaffeHeader name={name} />
      {orders &&
        orders.map((el) => {
          return <Orders order={el} />;
        })}
    </div>
  );
};

export default CaffeIndividualPanel;
