import { IProductContainerProps } from "./IProductContainerProps";

export interface ISearchContextType {
  searchItems: IProductContainerProps[];
  SearchProducts: (
    items: IProductContainerProps[],
    search: string | null
  ) => IProductContainerProps[];
}
