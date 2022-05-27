import { useEffect, useRef, useState } from "react";

import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { userActions } from "../../store/user/userSlice";
import { useDispatch } from "react-redux";

import { AiOutlineRollback } from "react-icons/ai";

import style from "./CaffeSettings.module.css";

import Header from "./Header";

const CaffeSettings = () => {
  const params = useParams();

  const [ip, setIp] = useState("");
  const [name, setName] = useState("Placeholder");

  const dispatch = useDispatch();

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
            dispatch(userActions.logOut());
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
      <Header />
      <Link to={`/caffe/${params.caffeId}`}>
        <AiOutlineRollback fontSize={24} className={style.icon} />
      </Link>
      <h1 className={style.header}>Uredi kafic: </h1>
      <form onSubmit={editCaffe} className={style.form}>
        <label className={style.label}>
          <span>Ime:</span> {name}
        </label>
        <input
          type="text"
          placeholder={name}
          className={style.input}
          maxLength="24"
          ref={formName}
        />

        <label className={style.label}>
          <span>IP</span>: {ip}
        </label>
        <input
          type="text"
          placeholder={ip}
          className={style.input}
          maxLength="24"
          ref={formIp}
        />

        <label className={style.label}>
          <span>Lozinka:</span>
        </label>
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

export default CaffeSettings;
