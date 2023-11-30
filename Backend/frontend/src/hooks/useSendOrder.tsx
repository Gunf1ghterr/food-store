import { useMutation } from "@tanstack/react-query";
import { SendOrderService } from "../services/SendOrder.service";
import { AxiosError } from "axios";
import { useHistoryOrders } from "./useHistoryOrders";

export const useSendOrder = (userId: number) => {
  const _useHistoryOrders = useHistoryOrders(userId);
  return useMutation({
    mutationFn: (data: FormData) => SendOrderService(data),
    mutationKey: ["order-new"],
    onSuccess: (data) => {
      localStorage.setItem("cart", "[]");
      _useHistoryOrders.refetch();
      window.location.href = "/";
    },
    onError: (error: AxiosError) => {
      console.log(error);
    },
    retry: false,
  });
};
