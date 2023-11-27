import { useQuery } from "@tanstack/react-query";
import { HistoryOrdersService } from "../services/HistoryOrders.service";

export const useHistoryOrders = (userId: number) => {
  return useQuery({
    queryKey: ["history-orders", userId],
    queryFn: () => HistoryOrdersService(userId || 0),
    select: (data) => data,
  });
};
