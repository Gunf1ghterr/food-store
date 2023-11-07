import { IProductContainerProps } from "../../interfaces/IProductContainerProps";

export const FilterParams = (
  _param: string | null,
  _items: IProductContainerProps[]
): IProductContainerProps[] => {
  const updatedItems = [..._items];
  if (
    _param &&
    ["chicken", "beef", "desserts", "combo", "snacks", "drinks"].includes(
      _param
    )
  ) {
    return updatedItems.filter((item) => item.category === _param);
  } else {
    return updatedItems;
  }
};
