import axios from "axios";

export const CancelOrderService = async (orderId: number,userId: number) => {
  const formData = new FormData();
  formData.append("orderId", orderId.toString());
  formData.append("userId", userId.toString());
  return axios.put(
    `${process.env.REACT_APP_URL_TEMP}api/order/cancel`,
    formData,
    {
      withCredentials: true,
    }
  );
};
