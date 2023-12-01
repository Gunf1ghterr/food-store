import { useEffect, useState } from "react";
import { ProductContainer } from "../elements/containers/ProductContainer";
import { Caruosel } from "../elements/containers/Carousel";
import { NavbarMenu } from "../elements/NavbarMenu";
import { IProductContainerProps } from "../../interfaces/IProductContainerProps";
import { useLocation } from "react-router-dom";
import { FilterParams } from "../functions/FilterParams";
import { SearchProducts } from "../functions/SearchProducts";
import { useProducts } from "../../hooks/useProducts";
import React from "react";

export const HomePage: React.FC = () => {
  const [items, setItems] = useState<IProductContainerProps[]>([]);
  const [loading, setLoading] = useState(false);
  const param: string | null = new URLSearchParams(useLocation().search).get(
    "param"
  );

  const [search, setSearch] = useState("");
  const { data, isSuccess, isLoading } = useProducts();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (isLoading) {
      setLoading(true);
    } else if (isSuccess) {
      setLoading(false);
      setItems(data as IProductContainerProps[]);
    }
  }, [data, isLoading, isSuccess]);

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
          {loading && (
            <div className="d-flex justify-content-center my-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
          {FilterParams(param, SearchProducts(items, search)).map((item) => (
            <ProductContainer key={item.id} {...item} />
          ))}
        </div>
      </div>
    </main>
  );
};
