import axios from "axios";
import { useSelector } from "react-redux";
import { caffeActions } from "../../store/caffes/caffeSlice";
import { useDispatch } from "react-redux";

import NewCaffe from "./NewCaffe";

import { BsFillPencilFill } from "react-icons/bs";
import { Link, Outlet } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { TiDocument } from "react-icons/ti";

import style from "./Caffes.module.css";
const Caffes = () => {
  const caffes = useSelector((state) => state.caffe.caffes);

  const dispatch = useDispatch();

  const deleteCaffe = (id) => {
    axios
      .delete(`http://localhost:1337/caffes/caffe/${id}`)
      .then((response) => {
        alert("Uspjesno obrisan kafic.");
        axios
          .get("http://localhost:1337/caffes")
          .then((response) => {
            dispatch(caffeActions.setCaffes(response.data));
          })
          .catch((err) => alert(err));
      })
      .catch((err) => {
        alert("Doslo je do greske prilikom brisanja kafica.");
        console.log(id);
      });
  };

  return (
    <div className={style.wrapper}>
      <NewCaffe />
      <h1>Trenutni kafici: </h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Ime</th>
            <th>IP</th>
            <th>Obrisi</th>
            <th>Izvjestaj</th>
            <th>Uredi</th>
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
                    <AiFillDelete
                      fontSize={20}
                      onClick={() => deleteCaffe(el.id)}
                      className={style.icon}
                    />
                  </td>
                  <td>
                    <Link to={`/ucp/izvjestaj/${el.id}`} key={el.id}>
                      <TiDocument fontSize={20} className={style.icon} />
                    </Link>
                  </td>
                  <td>
                    <Link to={`/ucp/${el.id}`} key={el.id}>
                      <BsFillPencilFill fontSize={20} className={style.icon} />
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
