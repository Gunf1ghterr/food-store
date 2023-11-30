import axios from "axios";

export const OffersService = async () => {
  return axios.get(`${process.env.REACT_APP_URL_TEMP}api/offers`);
};
