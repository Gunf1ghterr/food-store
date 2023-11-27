import { useQuery } from "@tanstack/react-query";
import { OffersService } from "../services/Offers.service";
import { IOfferContainerProps } from "../interfaces/IOfferContainerProps";

export const useOffers = () => {
  return useQuery({
    queryKey: ["offers"],
    queryFn: () => OffersService(),
    select: (data) => data.data as IOfferContainerProps[],
    
  });
};
