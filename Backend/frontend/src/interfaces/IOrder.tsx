import { ICartProductContainer } from "./ICartProductContainer";

export interface IOrder {
  customer_id: number;
  date: string;
  status: string;
  total: number;
  id: number;
  address: string;
  comment?: string;
  items: ICartProductContainer[];
  recipient: string;
  recipient_phone: string;
}
