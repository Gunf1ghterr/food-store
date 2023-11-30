import axios from "axios";

export const FeedbacksService = async (skip: number) => {
  return axios.get(
    `${process.env.REACT_APP_URL_TEMP}api/feedback/get?skip=${skip}`
  );
};
