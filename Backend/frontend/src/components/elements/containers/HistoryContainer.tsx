import { useCurrentOrder } from "../../contexts/CurrentOrderContext";
import { useCart } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { FaRepeat } from "react-icons/fa6";
import { IOrderDTO } from "../../../interfaces/IOrderDTO";
import { IoClose } from "react-icons/io5";
import { useCancelOrder } from "../../../hooks/useCancelOrder";
import { Statuses } from "../../../enums/statuses";
import React from "react";

export const HistoryContainer: React.FC<IOrderDTO> = ({ order, items }) => {
  const { mutate } = useCancelOrder(order.id, order.customer_Id);

  const options: Intl.DateTimeFormatOptions = {
    month: "2-digit",
    year: "numeric",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  };

  const originalDateTime: Date = new Date(order.date);
  const formattedDateTime: string = originalDateTime.toLocaleString(
    undefined,
    options
  );
  const { setCurrentOrder } = useCurrentOrder();
  const { setCartItems } = useCart();
  const navigate = useNavigate();
  const repeatOrder = () => {
    setCurrentOrder({
      customer_id: order.customer_Id,
      address: order.adres,
      comment: order.comment || "",
      recipient: order.recipient,
      recipient_phone: order.recipient_phone,
    });
    for (let i = 0; i < items.length; i++) {
      items[i].count = order.prodLists[i].count;
    }
    setCartItems(items);
    navigate("/checkout");
  };
  return (
    <div className="card mb-3">
      <div className="card-header d-flex  justify-content-between">
        <p className="h6 mb-1">Номер заказа: {order.id}</p>
        <p className="h6 mb-1">Дата заказа: {formattedDateTime}</p>
      </div>
      <div className="card-body text-start">
        <p className="mb-0">
          <b>Статус:</b> {order.status}
        </p>
        <p className="mb-0">
          <b>Адресс:</b> {order.adres}
        </p>
        <p className="mb-0">
          <b>Получатель:</b> {order.recipient}
        </p>
        <p className="mb-0">
          <b>Телефон получателя:</b> {order.recipient_phone}
        </p>
        <p className="mb-0">
          <b>Комментарий:</b> {order.comment}
        </p>
        {items.map((item) => {
          const prodList = order.prodLists.find(
            (prodListItem) => prodListItem.product_Id === item.id
          );

          const count = prodList ? prodList.count : 0;

          return <h6 key={item.id}>{`${item.name} x ${count}`}</h6>;
        })}
      </div>
      <div className="card-footer d-flex justify-content-between">
        <p className="h5">Сумма заказа: {order.total}</p>
        {order.status === Statuses.Executed ||
        order.status === Statuses.Cancelled ? (
          <FaRepeat
            style={{ cursor: "pointer", fontSize: "30px" }}
            onClick={() => repeatOrder()}
            data-bs-dismiss="modal"
            title="Повторить заказ"
          />
        ) : (
          <IoClose
            style={{ cursor: "pointer", fontSize: "30px" }}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapseCancelOrder${order.id}`}
            aria-expanded="false"
            aria-controls={`collapseCancelOrder${order.id}`}
            title="Отменить заказ"
          />
        )}
      </div>
      <div className="collapse" id={`collapseCancelOrder${order.id}`}>
        <div className="card card-body">
          Вы уверены что хотите отменить заказ?
          <div className="d-flex justify-content-end mt-1">
            <button
              className="btn btn-danger mx-2"
              data-bs-toggle="collapse"
              data-bs-target={`#collapseCancelOrder${order.id}`}
              onClick={() =>
                mutate({ orderId: order.id, userId: order.customer_Id })
              }
            >
              Да
            </button>
            <button
              className="btn btn-dark"
              data-bs-toggle="collapse"
              data-bs-target={`#collapseCancelOrder${order.id}`}
            >
              Нет
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
