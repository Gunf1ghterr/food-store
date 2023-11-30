import { useEffect, useState } from "react";
import { HistoryContainer } from "./containers/HistoryContainer";
import { useHistoryOrders } from "../../hooks/useHistoryOrders";
import { useAuth } from "../contexts/AuthContext";
import { IOrderDTO } from "../../interfaces/IOrderDTO";
import React from "react";

export const History: React.FC = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [empty, setEmpty] = useState(false);
  const userId = user?.id;
  const { data, isSuccess, isLoading } = useHistoryOrders(userId || 0);
  const [orders, setOrders] = useState<IOrderDTO[]>([]);
  useEffect(() => {
    if (isLoading) {
      setLoading(true);
    }
    if (isSuccess) {
      if (data.status === 200) {
        setOrders(data.data as IOrderDTO[]);
      } else if (data.status === 204) {
        setOrders([]);
        setEmpty(true);
      }

      setLoading(false);
    }
  }, [data, isLoading, isSuccess]);

  return (
    <div>
      {loading && (
        <div className="d-flex justify-content-center my-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {empty && <h4>Пусто ;(</h4>}
      {orders.map((order) => (
        <HistoryContainer key={order.order.id} {...order} />
      ))}
    </div>
  );
};
