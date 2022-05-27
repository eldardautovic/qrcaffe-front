import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getStatement } from "../../store/orders/ordersReducer";
import style from "./CaffeStatement.module.css";
import { IoMdCheckmark, IoMdClose } from "react-icons/io";
import { AiOutlineRollback } from "react-icons/ai";
import { Link } from "react-router-dom";
import Header from "./Header";

const CaffeStatement = () => {
  const orders = useSelector((state) => state.orders.orders);
  const dispatch = useDispatch();

  const params = useParams();

  useEffect(() => {
    dispatch(getStatement(params.caffeId));
  }, []);

  return (
    <>
      <div>
        <Header />
        <Link to={`/caffe/${params.caffeId}`}>
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
                        <IoMdCheckmark
                          fontSize={22}
                          style={{ color: "green" }}
                        />
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
    </>
  );
};

export default CaffeStatement;
