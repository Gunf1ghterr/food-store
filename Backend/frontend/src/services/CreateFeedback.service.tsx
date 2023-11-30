import axios from "axios";

export const CreateFeedbackService = async (data: FormData) => {
  return axios.post(
    `${process.env.REACT_APP_URL_TEMP}api/feedback/create`,
    data,
    { withCredentials: true }
  );
};
