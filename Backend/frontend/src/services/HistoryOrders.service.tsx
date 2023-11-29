import axios from "axios";

export const HistoryOrdersService = async (userId: number) => {
  return axios.get(
    `${process.env.REACT_APP_URL_TEMP}api/order/history?UserId=${userId}`,
    { withCredentials: true }
  );
};
