import React, { useState } from "react";
interface Order {
    orderNumber: string;
    productName: string;
    quantity: number;
    status: string;
  }
  
  interface OrderListProps {
    orders: Order[];
  }
  export const OrderList: React.FC<OrderListProps> = ({ orders }) => {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedOrder, setEditedOrder] = useState<Order | null>(null);

  const openModal = (order: Order) => {
    setSelectedOrder(order);
    setEditedOrder({ ...order }); 
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedOrder(null);
    setEditedOrder(null);
    setIsModalOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (editedOrder) {
      setEditedOrder({
        ...editedOrder,
        [e.target.name]: e.target.value 
      });
    }
  };

  const saveChanges = () => {
    if (editedOrder) {
     
      const updatedOrders = orders.map(order =>
        order.orderNumber === editedOrder.orderNumber ? editedOrder : order
      );
     
      console.log("Updated Orders:", updatedOrders);
      closeModal(); 
    }
  };
    return (
      <div className="orders-list">
        <h2>Список заказов</h2>
        <table className="table">
          <thead>
            <tr>
              <th className="p-3">Номер заказа</th>
              <th className="p-3">Товар</th>
              <th className="p-3">Кол-во</th>
              <th className="p-3">Статус</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <React.Fragment key={index}>
                <tr>
                  <td className="p-3">{order.orderNumber}</td>
                  <td className="p-3" onClick={() => openModal(order)} style={{ cursor: 'pointer' }}>
                    {order.productName}
                  </td>
                  <td className="p-3">{order.quantity}</td>
                  <td className="p-3">{order.status}</td>
                </tr>
                {index !== orders.length - 1 && (
                  <tr key={`separator-${index}`}>
                    <td colSpan={4}><hr /></td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
  
        <div className={`modal ${isModalOpen ? 'show' : ''}`} style={{ display: isModalOpen ? 'block' : 'none' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Детали заказа</h5>
              <button type="button" className="close" onClick={closeModal}>
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
          {editedOrder && (
            <>
              <p>
                Номер заказа:{editedOrder.orderNumber}
              </p>
              <p>
                Товар:{editedOrder.productName}
              </p>
              <p>
                Количество:{editedOrder.quantity}
              </p>
              <p>
                Статус:{" "}
                <select name="status" value={editedOrder.status} onChange={handleInputChange}>
                  <option value="Pending">В обработке</option>
                  <option value="Processing">Готовится</option>
                  <option value="Completed">Доставляется</option>
                  <option value="Canceled">Отменен</option>
                </select>
              </p>
              <button onClick={saveChanges}>Save Changes</button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  };
