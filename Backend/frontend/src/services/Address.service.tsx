import axios from "axios";

export const AddressService = async (connect: string) => {
  return axios.get(connect);
};
