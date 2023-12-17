import React from 'react';
import OfferContainer from '../elements/containers/AdminOfferContainer'; 


const offers = [
  {
    id: 1,
    title: 'Скидка на товары для дома',
    description: 'Скидки до 50% на товары для дома до конца месяца!',
    image: 'https://example.com/image1.jpg',
  },
  {
    id: 1,
    title: 'Скидка на товары для дома',
    description: 'Скидки до 50% на товары для дома до конца месяца!',
    image: 'https://example.com/image1.jpg',
  },
  {
    id: 1,
    title: 'Скидка на товары для дома',
    description: 'Скидки до 50% на товары для дома до конца месяца!',
    image: 'https://example.com/image1.jpg',
  },
  {
    id: 1,
    title: 'Скидка на товары для дома',
    description: 'Скидки до 50% на товары для дома до конца месяца!',
    image: 'https://example.com/image1.jpg',
  },
  
];

export const AdminOffers: React.FC = () => {
  return (
    <div className="offers-page">
      <OfferContainer offerData={offers} />
    </div>
  );
};

export default AdminOffers;
