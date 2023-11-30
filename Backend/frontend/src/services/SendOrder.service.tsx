import axios from "axios";

export const SendOrderService = async (data: FormData) => {
  return axios.post(`${process.env.REACT_APP_URL_TEMP}api/order/new`, data, {
    withCredentials: true,
  });
};
