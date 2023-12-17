import React from 'react';
import { OrderList } from './AdminOrderList'; // Подставьте правильный путь к вашему компоненту

const OrdersPage = () => {
  const ordersData = [
    {
      orderNumber: '12345',
      productName: 'Пример товара 1',
      quantity: 2,
      status: 'В обработке',
    },
    {
      orderNumber: '54321',
      productName: 'Пример товара 2',
      quantity: 1,
      status: 'Выполнен',
    },
  ];

  return (
    <div className="bg-white rounded p-4 mt-4 d-inline-block w-auto">
      <OrderList orders={ordersData} />
    </div>
  );
};

export default OrdersPage;
