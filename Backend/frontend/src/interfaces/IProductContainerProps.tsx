export interface IProductContainerProps {
  id: number;
  price: number;
  name: string;
  description: string;
  category: string;
  image: string;
  date?: Date;
  productLists?: null;
}
