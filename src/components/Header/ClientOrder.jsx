import axios from "axios";
import { useRef, useState } from "react";
import style from "./ClientOrder.module.css";

const ClientOrder = ({ name, id, table }) => {
  const [items, setItems] = useState([]);
  const [price, setPrice] = useState(0);
  const [error, setError] = useState("");

  const inputRef = useRef();

  const addToCart = (item, cijena) => {
    setItems((old) => [...old, item]);
    setPrice(cijena + price);
  };

  const cancel = () => {
    setItems([]);
    setPrice(0);
    inputRef.current.value = "";
  };

  const order = () => {
    if (items.length === 0) return setError("Narudzba prazna.");
    else if (price === 0)
      return setError("Interni error, ponovo ucitajte stranicu.");

    console.log(inputRef.current.value);

    axios
      .post(`http://localhost:1337/orders`, {
        content: items.join(" ").toString(),
        note: inputRef.current.value,
        caffeId: id,
        tableId: table,
        price: price,
      })
      .then((response) => {
        alert("Narudzba uspjesna.");
        cancel();
      })
      .catch((err) => alert("Doslo je do interne greskse."));
  };

  return (
    <div className={style.wrapper}>
      <h1 className={style.header}>{name && name}</h1>
      <h2 className={style.table}>{table && `Stol ${table}`}</h2>
      <ul className={style.items}>
        <li className={style.item} onClick={() => addToCart("Kafa", 1.5)}>
          <h1>Kafa</h1>
          <p>1.5 KM</p>
        </li>
        <li className={style.item} onClick={() => addToCart("Caj", 1.5)}>
          <h1>Caj</h1>
          <p>1.5 KM</p>
        </li>
        <li className={style.item} onClick={() => addToCart("Nes 3 u 1", 2)}>
          <h1>Nes 3 u 1</h1>
          <p>2.0 KM</p>
        </li>
        <li className={style.item} onClick={() => addToCart("Cappucino", 2.5)}>
          <h1>Cappucino</h1>
          <p>2.5 KM</p>
        </li>
        <li className={style.item} onClick={() => addToCart("Ledena kafa", 3)}>
          <h1>Ledena kafa</h1>
          <p>3.0 KM</p>
        </li>
        <li className={style.item} onClick={() => addToCart("Coca cola", 3)}>
          <h1>Coca cola</h1>
          <p>3.0 KM</p>
        </li>
        <li className={style.item} onClick={() => addToCart("Ledeni caj", 3)}>
          <h1>Ledeni caj</h1>
          <p>3.0 KM</p>
        </li>
        <li className={style.item} onClick={() => addToCart("Cedevita", 3)}>
          <h1>Cedevita</h1>
          <p>3.0 KM</p>
        </li>
      </ul>
      <p className={style.content}>Content: </p>
      <ul className={style.orders}>
        {items.length !== 0 ? (
          items.map((el, i) => {
            return (
              <li className={style.orderinfo} key={i}>
                {el}
              </li>
            );
          })
        ) : (
          <p>Korpa prazna</p>
        )}
      </ul>
      <div className={style.note}>
        <label>Napomena: </label>
        <input placeholder="Napomena za narudzbu" type="text" ref={inputRef} />
      </div>
      <h4 className={style.all}>
        Ukupno: <span>{price && price} KM</span>
      </h4>
      <div className={style.buttons}>
        <button
          className={[style.button, style.order].join(" ")}
          onClick={order}
        >
          Naruci
        </button>
        <button
          className={[style.button, style.cancel].join(" ")}
          onClick={cancel}
        >
          Ocisti narudzbu
        </button>
      </div>

      {error && <p className={style.error}>* {error}</p>}
    </div>
  );
};

export default ClientOrder;
