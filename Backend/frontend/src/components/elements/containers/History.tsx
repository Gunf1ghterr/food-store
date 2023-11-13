import { useEffect, useState } from "react";
import { HistoryContainer } from "./HistoryContainer";
import { IOrder } from "../../../interfaces/IOrder";

export const History: React.FC = () => {
  const [orders, setOrders] = useState<IOrder[]>([]);
  useEffect(() => {
    setOrders([
      {
        id: 1,
        customer_id: 1,
        date: "01.01.2022",
        status: "В обработке",
        total: 123,
        address: "Санкт-Петербург",
        comment: "Комментарий",
        recipient: "Иван Иванов",
        recipient_phone: "1234567890",
        items: [
          {
            id: 1,
            prodName: "Товар",
            price: 200,
            count: 1,
            image: "./logo.png",
          },
          {
            id: 2,
            prodName: "Товар 2",
            price: 100,
            count: 2,
            image: "./logo.png",
          },
        ],
      },
      {
        id: 2,
        customer_id: 1,
        date: "01.01.2022",
        status: "В обработке",
        total: 123,
        address: "Санкт-Петербург",
        comment: "Комментарий",
        recipient: "Иван Иванов",
        recipient_phone: "1234567890",
        items: [
          {
            id: 1,
            prodName: "Товар",
            price: 200,
            count: 1,
            image: "./logo.png",
          },
          {
            id: 2,
            prodName: "Товар 2",
            price: 100,
            count: 2,
            image: "./logo.png",
          },
        ],
      },
      {
        id: 3,
        customer_id: 1,
        date: "01.01.2022",
        status: "В обработке",
        total: 123,
        address: "Санкт-Петербург",
        comment: "Комментарий",
        recipient: "Иван Иванов",
        recipient_phone: "1234567890",
        items: [
          {
            id: 1,
            prodName: "Товар",
            price: 200,
            count: 1,
            image: "./logo.png",
          },
          {
            id: 2,
            prodName: "Товар 2",
            price: 100,
            count: 2,
            image: "./logo.png",
          },
        ],
      },
      {
        id: 4,
        customer_id: 1,
        date: "01.01.2022",
        status: "В обработке",
        total: 123,
        address: "Санкт-Петербург",
        comment: "Комментарий",
        recipient: "Иван Иванов",
        recipient_phone: "1234567890",
        items: [
          {
            id: 1,
            prodName: "Товар",
            price: 200,
            count: 1,
            image: "./logo.png",
          },
          {
            id: 2,
            prodName: "Товар 2",
            price: 100,
            count: 2,
            image: "./logo.png",
          },
        ],
      },
      {
        id: 5,
        customer_id: 1,
        date: "01.01.2022",
        status: "В обработке",
        total: 123,
        address: "Санкт-Петербург",
        comment: "Комментарий",
        recipient: "Иван Иванов",
        recipient_phone: "1234567890",
        items: [
          {
            id: 1,
            prodName: "Товар",
            price: 200,
            count: 1,
            image: "./logo.png",
          },
          {
            id: 2,
            prodName: "Товар 2",
            price: 100,
            count: 2,
            image: "./logo.png",
          },
        ],
      },
      {
        id: 6,
        customer_id: 1,
        date: "01.01.2022",
        status: "В обработке",
        total: 123,
        address: "Санкт-Петербург",
        comment: "Комментарий",
        recipient: "Иван Иванов",
        recipient_phone: "1234567890",
        items: [
          {
            id: 1,
            prodName: "Товар",
            price: 200,
            count: 1,
            image: "./logo.png",
          },
          {
            id: 2,
            prodName: "Товар 2",
            price: 100,
            count: 2,
            image: "./logo.png",
          },
        ],
      },
    ]);
  }, []);
  return (
    <div>
      {orders.map((order) => (
        <HistoryContainer key={order.id} {...order} />
      ))}
    </div>
  );
};
