import { ICarouselItem } from "../../../interfaces/ICarouselItem";
import React from "react";
export const CarouselItem: React.FC<ICarouselItem> = ({ image, active }) => {
  return (
    <div className={`carousel-item ${active ? "active" : ""}`}>
      <img src={image} className="d-block w-100 rounded-5" alt="offer" />
    </div>
  );
};
