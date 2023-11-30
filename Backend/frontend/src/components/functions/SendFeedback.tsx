import { MouseEventHandler } from "react";
import { FormDecorator } from "./FormDecorator";
import { ValidateFeedback } from "./ValidateFeedback";
import { UseMutateFunction } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useAuth } from "../contexts/AuthContext";

export const SendFeedback = (
  _mutate: UseMutateFunction<AxiosResponse<any, any>, Error, FormData, unknown>
): MouseEventHandler<HTMLButtonElement> => {
  const { user } = useAuth();
  return FormDecorator(
    ValidateFeedback,
    () => {
      const formData = new FormData(
        document.getElementById("feedback-form") as HTMLFormElement
      );
      const image = document.getElementById("filePreview") as HTMLDivElement;
      image.innerHTML = "";
      formData.append("userId", user?.id.toString() as string);
      _mutate(formData);
    },
    "feedback-form"
  );
};
