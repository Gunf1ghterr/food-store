import axios from "axios";

export const LoginService = async (data: FormData) => {
  return axios.post(`${process.env.REACT_APP_URL_TEMP}api/user/login`, data, {
    withCredentials: true,
  });
};
