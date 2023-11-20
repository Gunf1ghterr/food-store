import { ICartProductContainer } from "./ICartProductContainer";

export interface ICartContextType {
  cartItems: ICartProductContainer[];
  addItemToCart: (item: ICartProductContainer) => void;
  removeItemFromCart: (id: number) => void;
  setCartItems: React.Dispatch<React.SetStateAction<ICartProductContainer[]>>;
}
