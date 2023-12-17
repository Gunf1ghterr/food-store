import React from 'react';
import {ProductContainer} from '../elements/containers/AdminProductContainer'; 

const products = [
    {
      id: 1,
      name: 'Название продукта 1',
      description: 'Опис',
      image: 'ссылка_на_изображение_продукта_1',
      price: 1000,
      category:'ffff'
    },
    {
        id: 2,
        name: 'Название продукта 1',
        description: 'Опис',
        image: 'ссылка_на_изображение_продукта_1',
        price: 1000,
        category:'ffff'
      },
  ];

export const AdminProducts : React.FC = () => {
    return (
      <div>
        <div className="row">
          {products.map(product => (
            <ProductContainer
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              category = {product.category}
              image={product.image}
              price={product.price}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default AdminProducts;
  