import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { IOfferType } from "../../interfaces/IOfferType";
import { IOfferContainerProps } from "../../interfaces/IOfferContainerProps";
import { useOffers } from "../../hooks/useOffers";
import React from "react";
const OfferContext = createContext<IOfferType | null>(null);

export const useOffer = () => {
  const context = useContext(OfferContext);
  if (!context) {
    throw new Error("useOffer must be used within a OfferProvider");
  }
  return context;
};

export const OfferProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [items, setItems] = useState<IOfferContainerProps[]>([]);
  const { data, isSuccess, isLoading } = useOffers();
  useEffect(() => {
    if (isLoading) {
    } else if (isSuccess) {
      setItems(data as IOfferContainerProps[]);
    }
  }, [data, isLoading, isSuccess]);

  const addItem = (item: IOfferContainerProps) => {
    setItems([...items, item]);
  };

  return (
    <OfferContext.Provider
      value={{
        items,
        addItem,
      }}
    >
      {children}
    </OfferContext.Provider>
  );
};
