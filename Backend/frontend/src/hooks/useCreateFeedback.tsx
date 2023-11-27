import { useMutation } from "@tanstack/react-query";
import { CreateFeedbackService } from "../services/CreateFeedback.service";
import { useFeedbacks } from "./useFeedbacks";
import { AxiosError } from "axios";

export const useCreateFeedback = (skip: number) => {
  const _useFeedbacks = useFeedbacks(skip);

  return useMutation({
    mutationFn: (data: FormData) => CreateFeedbackService(data),
    mutationKey: ["feedback-create"],
    onSuccess: (data) => {
      const modal = document.getElementById("close-modal-feedback");
      if (modal) {
        modal.click();
      }
      _useFeedbacks.refetch();
    },
    onError: (error: AxiosError) => {
      const alert = document.getElementById("fileAlert");
      if (alert) {
        alert.textContent = error?.response?.data as string;
        alert.classList.remove("d-none");
      }
    },
    retry: false,
  });
};
