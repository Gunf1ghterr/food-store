import axios from "axios";

export const DeleteUserService = async (userId: number) => {
  return axios.delete(
    `${process.env.REACT_APP_URL_TEMP}api/user/delete?UserId=${userId}`,
    { withCredentials: true }
  );
};
