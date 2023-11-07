import { useEffect, useState } from "react";
import { ProductContainer } from "../elements/containers/ProductContainer";
import { Caruosel } from "../elements/containers/Carousel";
import { NavbarMenu } from "../elements/NavbarMenu";
import { IProductContainerProps } from "../../interfaces/IProductContainerProps";
import { useLocation } from "react-router-dom";
import { FilterParams } from "../functions/FilterParams";
import { SearchProducts } from "../functions/SearchProducts";

export const HomePage: React.FC = () => {
  const [items, setItems] = useState<IProductContainerProps[]>([]);
  const param: string | null = new URLSearchParams(useLocation().search).get(
    "param"
  );

  const [search, setSearch] = useState("");

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
        category: "snacks",
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
      <div className="p-2">
        <div className="row justify-content-start">
          <input
            className="form-control me-2 rounded-5 search-input"
            type="search"
            placeholder="Поиск"
            aria-label="Поиск"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            tabIndex={1}
          />
        </div>
      </div>
      <div className="container">
        <div className="row">
          {FilterParams(param, SearchProducts(items, search)).map((item) => (
            <ProductContainer key={item.id} {...item} />
          ))}
        </div>
      </div>
    </main>
  );
};
