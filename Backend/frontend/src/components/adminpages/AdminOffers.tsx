import { useOffer } from "../contexts/OfferContext";
import React from "react";
import { AdminOfferContainer } from "../elements/containers/AdminOfferContainer";

export const AdminOffers: React.FC = () => {
  const { items } = useOffer();
  return (
    <main>
      <div className="container">
        <div className="row">
          {items.map((item) => (
            <AdminOfferContainer
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </main>
  );
};
