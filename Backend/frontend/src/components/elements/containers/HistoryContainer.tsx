import { IOrder } from "../../../interfaces/IOrder";
import { useCurrentOrder } from "../../contexts/CurrentOrderContext";
import { useCart } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { FaRepeat } from "react-icons/fa6";

export const HistoryContainer: React.FC<IOrder> = ({
  id,
  customer_id,
  date,
  status,
  total,
  address,
  comment,
  items,
  recipient,
  recipient_phone,
}) => {
  const { setCurrentOrder } = useCurrentOrder();
  const { setCartItems } = useCart();
  const navigate = useNavigate();
  const repeatOrder = () => {
    setCurrentOrder({
      customer_id,
      address,
      comment: comment,
      recipient,
      recipient_phone,
    });
    setCartItems(items);
    navigate("/checkout");
  };
  return (
    <div className="card mb-3">
      <div className="card-header d-flex  justify-content-between">
        <p className="h6 mb-1">Номер заказа: {id}</p>
        <p className="h6 mb-1">Дата заказа: {date}</p>
      </div>
      <div className="card-body text-start">
        <p className="mb-0">
          <b>Статус:</b> {status}
        </p>
        <p className="mb-0">
          <b>Адресс:</b> {address}
        </p>
        <p className="mb-0">
          <b>Получатель:</b> {recipient}
        </p>
        <p className="mb-0">
          <b>Телефон получателя:</b> {recipient_phone}
        </p>
        <p className="mb-0">
          <b>Комментарий:</b> {comment}
        </p>
        {items.map((item) => (
          <p
            className="h6"
            key={item.id}
          >{`${item.prodName} x ${item.count} `}</p>
        ))}
      </div>
      <div className="card-footer d-flex justify-content-between">
        <p className="h5">Сумма заказа: {total}</p>
        <FaRepeat
          style={{ cursor: "pointer", fontSize: "30px" }}
          onClick={() => repeatOrder()}
          data-bs-dismiss="modal"
          title="Повторить заказ"
        />
      </div>
    </div>
  );
};
