import { useQuery } from "@tanstack/react-query";
import { ProductService } from "../services/Products.service";
import { IProductContainerProps } from "../interfaces/IProductContainerProps";

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => ProductService(),
    select: (data) => data.data as IProductContainerProps[],
  });
};
