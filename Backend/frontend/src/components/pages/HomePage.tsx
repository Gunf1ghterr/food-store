import { useEffect, useState } from "react";
import { ProductContainer } from "../elements/containers/ProductContainer";
import { Caruosel } from "../elements/containers/Carousel";
import { NavbarMenu } from "../elements/NavbarMenu";
import { IProductContainerProps } from "../../interfaces/IProductContainerProps";

export const HomePage: React.FC = () => {
  const [items, setItems] = useState<IProductContainerProps[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setItems([
      {
        image: "./p1.jpg",
        title: "Чикенбургер с кунжутом",
        description: "Описание карточки",
        id: 1,
        price: 300,
        category: "chicken",
      },
      {
        image: "./p2.jpg",
        title: "КрейзиХамбургер",
        description: "Описание карточки",
        id: 2,
        price: 500,
        category: "beef",
      },
      {
        image: "./p3.jpg",
        title: "КрейзиДжуниор",
        description: "Описание карточки",
        id: 3,
        price: 350,
        category: "beef",
      },
      {
        id: 4,
        description: "Описание карточки",
        image: "./p4.jpg",
        title: "Чизбургер",
        price: 100,
        category: "beef",
      },
      {
        id: 5,
        description: "Описание карточки",
        image: "./p5.jpg",
        title: "Чикенбургер",
        price: 300,
        category: "chicken",
      },
      {
        id: 6,
        description: "Описание карточки",
        image: "./p6.jpg",
        title: "Королевский чизбургер",
        price: 300,
        category: "beef",
      },
      {
        id: 7,
        description: "Описание карточки",
        image: "./p7.jpg",
        title: "Чикенролл",
        price: 300,
        category: "chicken",
      },
      {
        id: 8,
        description: "Описание карточки",
        image: "./p8.jpg",
        title: "Шоколандый донат",
        price: 150,
        category: "desserts",
      },
      {
        id: 9,
        description: "Описание карточки",
        image: "./p9.jpg",
        title: "Какие-то чебупели",
        price: 200,
        category: "snack",
      },
    ]);
  }, []);

  return (
    <main>
      <div className="container my-3">
        <div className="row">
          <Caruosel />
        </div>
      </div>
      <NavbarMenu />
      <div className="container">
        <div className="row">
          {items.map((item) => (
            <ProductContainer {...item} />
          ))}
        </div>
      </div>
    </main>
  );
};
