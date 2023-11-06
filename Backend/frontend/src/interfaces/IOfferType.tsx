import { IOfferContainerProps } from "./IOfferContainerProps";

export interface IOfferType {
  items: IOfferContainerProps[];
  addItem: (item: IOfferContainerProps) => void;
}
