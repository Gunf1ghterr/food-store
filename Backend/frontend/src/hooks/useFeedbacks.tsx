import { useQuery } from "@tanstack/react-query";
import { FeedbacksService } from "../services/Feedbacks.service";
import { IFeedbackContainer } from "../interfaces/IFeedbackContainer";

export const useFeedbacks = () => {
  return useQuery({
    queryKey: ["feedbacks"],
    queryFn: () => FeedbacksService(),
    select: (data) => data.data as IFeedbackContainer[],
  });
};
