import { useQuery } from "@tanstack/react-query";
import { AddressService } from "../services/Address.service";

export const useAddress = (con: string, showMap: boolean) => {
  return useQuery({
    queryKey: ["address", con, showMap],
    queryFn: () => AddressService(con),
    select: (data) =>
      data.data.response.GeoObjectCollection.featureMember[0].GeoObject,
    retry: false,
    refetchOnWindowFocus: false,
    enabled: showMap,
    staleTime: Infinity,
  });
};
