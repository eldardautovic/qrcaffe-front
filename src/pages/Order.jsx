import { useEffect, useState } from "react";

import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

import ClientOrder from "../components/Header/ClientOrder";

import style from "./Order.module.css";

const Order = () => {
  const params = useParams();

  const history = useNavigate();

  const [caffeInfo, setCaffe] = useState({
    name: "",
    ip: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:1337/orders/user/${params.caffeId}`)
      .then((response) => {
        setCaffe({ name: response.data.name, ip: response.data.ip });
      })
      .catch((err) => alert(err));
  }, []);

  useEffect(() => {
    if (caffeInfo.ip) {
      axios
        .get("https://geolocation-db.com/json/")
        .then((response) => {
          if (caffeInfo.ip !== response.data.IPv4) {
            alert(
              "Niste na istoj IP adresi kao lokal, spojite se na njegov internet."
            );
            redirectToHome();
          }
        })
        .catch((err) => alert(err.message));
    }
  }, [caffeInfo.ip]);

  const redirectToHome = () => {
    history("/");
  };

  return (
    <div className={style.wrapper}>
      {caffeInfo.name ? (
        <ClientOrder
          name={caffeInfo.name}
          id={params.caffeId}
          table={params.tableId}
        />
      ) : (
        <h1>Ucitavanje...</h1>
      )}
    </div>
  );
};

export default Order;
