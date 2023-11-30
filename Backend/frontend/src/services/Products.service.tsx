import axios from "axios";

export const ProductService = async () => {
  return axios.get(`${process.env.REACT_APP_URL_TEMP}api/products`);
};
