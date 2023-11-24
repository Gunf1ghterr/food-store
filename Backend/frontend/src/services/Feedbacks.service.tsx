import axios from "axios";

export const FeedbacksService = async () => {
  return axios.get(`${process.env.REACT_APP_URL_TEMP}api/feedback/get`);
};
