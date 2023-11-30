import axios from "axios";

export const UpdateUserService = async (data: FormData) => {
  return axios.put(
    `${process.env.REACT_APP_URL_TEMP}api/user/update`,
    data,
    { withCredentials: true }
  );
};
