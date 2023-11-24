import axios from "axios";

export const RegistrationService = async (data: FormData) => {
  return axios.post(
    `${process.env.REACT_APP_URL_TEMP}api/user/registration`,
    data,
    { withCredentials: true }
  );
};
