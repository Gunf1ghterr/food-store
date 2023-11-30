import { OfferContainer } from "../elements/containers/OfferContainer";
import { useOffer } from "../contexts/OfferContext";
import React from "react";

export const Offers: React.FC = () => {
  const { items } = useOffer();
  return (
    <main>
      <div className="container">
        <div className="row">
          {items.map((item) => (
            <OfferContainer
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
