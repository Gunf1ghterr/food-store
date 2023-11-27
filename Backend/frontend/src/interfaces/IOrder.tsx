import { ICartProductContainer } from "./ICartProductContainer";
import { IProdList } from "./IProdList";

export interface IOrder {
  adres: string;
  comment?: string;
  customer_Id: number;
  date: string;
  id: number;
  payment?: string;
  prodLists: IProdList[];
  recipient: string;
  recipient_phone: string;
  status: string;
  total: number;
  items?: ICartProductContainer[];
}
