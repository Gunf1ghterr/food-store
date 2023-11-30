import { ICartProductContainer } from "./ICartProductContainer";
import { IOrder } from "./IOrder";

export interface IOrderDTO {
  order: IOrder;
  items: ICartProductContainer[];
}
