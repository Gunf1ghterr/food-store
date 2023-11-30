import { IProductContainerProps } from "../../interfaces/IProductContainerProps";

export const SearchProducts = (
  _items: IProductContainerProps[],
  _search: string | null
): IProductContainerProps[] => {
  const updatedItems = [..._items];
  if (_search) {
    return updatedItems.filter((item) =>
      item.name.toLowerCase().includes(_search.toLowerCase())
    );
  } else {
    return updatedItems;
  }
};
