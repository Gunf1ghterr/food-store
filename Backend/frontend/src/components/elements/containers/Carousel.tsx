import { CarouselItem } from "./CarouselItem";
import { useEffect } from "react";
import { useOffer } from "../../contexts/OfferContext";
import React from "react";

export const Caruosel: React.FC = () => {
  useEffect(() => {}, []);

  const { items } = useOffer();

  return (
    <div id="carouselExampleIndicators" className="carousel slide ">
      <div className="carousel-inner">
        {items.map((item, index) => (
          <CarouselItem key={item.id} image={item.image} active={index === 0} />
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Предыдущий</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Следующий</span>
      </button>
    </div>
  );
};
