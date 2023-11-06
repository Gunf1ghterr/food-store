import { ICartProductContainer } from "../../interfaces/ICartProductContainer";

export const saveCartToLocalStorage = (cart: ICartProductContainer[]) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const loadCartFromLocalStorage = (): ICartProductContainer[] | [] => {
  const cartData = localStorage.getItem("cart");
  return cartData ? JSON.parse(cartData) : [];
};
