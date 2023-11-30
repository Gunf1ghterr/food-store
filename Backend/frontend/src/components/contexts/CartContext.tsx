import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { ICartProductContainer } from "../../interfaces/ICartProductContainer";
import { ICartContextType } from "../../interfaces/ICartContextType";
import {
  saveCartToLocalStorage,
  loadCartFromLocalStorage,
} from "../functions/LocalStorage";

const CartContext = createContext<ICartContextType | null>(null);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<ICartProductContainer[]>([]);
  useEffect(() => {
    setCartItems(loadCartFromLocalStorage());
  }, []);

  const addItemToCart = (item: ICartProductContainer) => {
    const existingItem = cartItems.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.count = item.count;
      saveCartToLocalStorage(cartItems);
      setCartItems([...cartItems]);
      return;
    }
    setCartItems([...cartItems, item]);
    saveCartToLocalStorage([...cartItems, item]);
  };

  const removeItemFromCart = (id: number): void => {
    const existingItem = cartItems.find((i) => i.id === id);
    if (!existingItem) {
      return;
    } else if (existingItem.count > 1) {
      existingItem.count--;
      setCartItems([...cartItems]);
      saveCartToLocalStorage([...cartItems]);
      return;
    } else if (existingItem.count === 1) {
      const updatedCart = cartItems.filter((item) => item.id !== id);
      setCartItems(updatedCart);
      saveCartToLocalStorage(updatedCart);
    }
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addItemToCart, removeItemFromCart, setCartItems }}
    >
      {children}
    </CartContext.Provider>
  );
};
