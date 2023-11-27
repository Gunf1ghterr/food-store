import { useQuery } from "@tanstack/react-query";
import { FeedbacksService } from "../services/Feedbacks.service";
import { IFeedbackContainer } from "../interfaces/IFeedbackContainer";

export const useFeedbacks = (skip?: number) => {
  return useQuery({
    queryKey: ["feedbacks", skip],
    queryFn: () => FeedbacksService(skip || 0),
    select: (data) => data.data as IFeedbackContainer[],
  });
};
