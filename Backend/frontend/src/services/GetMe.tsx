import axios from "axios";

export const GetMeService = async () => {
  return axios.get(`${process.env.REACT_APP_URL_TEMP}api/user/me`, { withCredentials: true });
};
