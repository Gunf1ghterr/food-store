import axios from "axios";

export const LogoutService = async () => {
  return axios.get(`${process.env.REACT_APP_URL_TEMP}api/user/logout`, {
    withCredentials: true,
  });
};
