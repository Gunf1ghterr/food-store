import { ICartProductContainer } from "../../interfaces/ICartProductContainer";
import { ReadCookie } from "./ReadCookie";

export const saveCartToLocalStorage = (cart: ICartProductContainer[]) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const loadCartFromLocalStorage = (): ICartProductContainer[] | [] => {
  const token = ReadCookie("token");
  if (!token) {
    localStorage.removeItem("cart");
    return [];
  }
  const cartData = localStorage.getItem("cart");
  return cartData ? JSON.parse(cartData) : [];
};
