import { createContext, useContext, useState, useEffect } from "react";
import { ICurrentOrderContext } from "../../interfaces/ICurrentOrderContext";
import { ICurrentOrder } from "../../interfaces/ICurrentOrder";
import { useAuth } from "./AuthContext";
import React from "react";

const CurrentOrderContext = createContext<ICurrentOrderContext | null>(null);

export const useCurrentOrder = () => {
  const context = useContext(CurrentOrderContext);
  if (!context) {
    throw new Error(
      "useCurrentOrder must be used within a CurrentOrderProvider"
    );
  }
  return context;
};

export const CurrentOrderProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { user } = useAuth();
  const [currentOrder, setCurrentOrder] = useState<ICurrentOrder>({
    customer_id: 0,
    address: "",
    comment: "",
    recipient: "",
    recipient_phone: "",
  });

  useEffect(() => {
    if (user) {
      setCurrentOrder({
        customer_id: user.id,
        address: "",
        comment: "",
        recipient: user.name,
        recipient_phone: user.phone,
      });
    }
  }, [user]);

  return (
    <CurrentOrderContext.Provider value={{ currentOrder, setCurrentOrder }}>
      {children}
    </CurrentOrderContext.Provider>
  );
};
