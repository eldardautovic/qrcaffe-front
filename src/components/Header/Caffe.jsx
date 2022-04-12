import React, { useEffect, useRef, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import style from "./Caffe.module.css";
import axios from "axios";
import { AiOutlineRollback } from "react-icons/ai";

const Caffe = () => {
  const params = useParams();

  const [ip, setIp] = useState("");
  const [name, setName] = useState("Placeholder");

  const pw = useRef();
  const formIp = useRef();
  const formName = useRef();

  const editCaffe = (event) => {
    event.preventDefault();

    axios
      .put(`http://localhost:1337/caffes/caffe`, {
        id: parseInt(params.caffeId),
        ip: formIp.current.value === "N/A" ? ip : formIp.current.value,
        name: formName.current.value === "N/A" ? name : formName.current.value,
        pass: pw.current.value === "N/A" ? "N/A" : pw.current.value,
      })
      .then((response) => {
        alert("Podaci uspjesno azurirani.");
        axios
          .get(`http://localhost:1337/caffes/caffe/${params.caffeId}`)
          .then((response) => {
            setIp(response.data.ip);
            setName(response.data.name);
            alert("Uspjesno uredjen kafic.");
          })
          .catch((err) => {
            alert("Doslo je do greske prilikom uredjivanja kafica.");
          });
      })
      .catch((err) => alert(err));
  };

  useEffect(() => {
    axios
      .get(`http://localhost:1337/caffes/caffe/${params.caffeId}`)
      .then((response) => {
        setIp(response.data.ip);
        setName(response.data.name);
      })
      .catch((err) => {
        alert("Doslo je do greske prilikom dobivanja kafica.");
      });

    pw.current.value = "N/A";
    formIp.current.value = "N/A";
    formName.current.value = "N/A";
  }, [params.caffeId]);

  return (
    <div className={style.wrapper}>
      <Link to="/ucp/">
        <AiOutlineRollback fontSize={24} className={style.icon} />
      </Link>
      <h1 className={style.header}>Uredi kafic: </h1>
      <form onSubmit={editCaffe} className={style.form}>
        <label className={style.label}>Ime: {name}</label>
        <input
          type="text"
          placeholder={name}
          className={style.input}
          maxLength="24"
          ref={formName}
        />

        <label className={style.label}>IP: {ip}</label>
        <input
          type="text"
          placeholder={ip}
          className={style.input}
          maxLength="24"
          ref={formIp}
        />

        <label className={style.label}>Lozinka:</label>
        <input
          type="text"
          placeholder="Lozinka..."
          className={style.input}
          maxLength="24"
          ref={pw}
        />

        <div className={style.buttonContainer}>
          <button type="submit" className={style.button}>
            Uredi
          </button>
        </div>
      </form>
    </div>
  );
};

export default Caffe;
