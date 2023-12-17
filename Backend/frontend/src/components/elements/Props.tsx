import React from 'react';
import { OrderList } from './AdminOrderList'; // Подставьте правильный путь к вашему компоненту

const OrdersPage = () => {
  const ordersData = [
    {
      orderNumber: '12345',
      productName: 'Пример товара 1',
      quantity: 2,
      status: 'В обработке',
      // Дополнительные поля заказа
    },
    {
      orderNumber: '54321',
      productName: 'Пример товара 2',
      quantity: 1,
      status: 'Выполнен',
      // Дополнительные поля заказа
    },
    // Добавьте другие заказы по аналогии
  ];

  return (
    <div className="bg-white rounded p-4 mt-4 d-inline-block w-auto">
      <OrderList orders={ordersData} />
    </div>
  );
};

export default OrdersPage;
