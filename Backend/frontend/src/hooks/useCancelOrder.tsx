import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { CancelOrderService } from "../services/CancelOrder.service";
import { useHistoryOrders } from "./useHistoryOrders";

export const useCancelOrder = (orderId: number, userId: number) => {
  const _useHistoryOrders = useHistoryOrders(userId);
  return useMutation({
    mutationFn: (value: { orderId: number; userId: number }) =>
      CancelOrderService(orderId, userId),
    mutationKey: ["cancel-order", orderId],
    onSuccess: (data) => {
      _useHistoryOrders.refetch();
    },
    onError: (error: AxiosError) => {
      console.log(error);
    },
    retry: false,
  });
};
