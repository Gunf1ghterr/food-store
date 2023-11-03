import { MouseEventHandler } from "react";
import { FormDecorator } from "./FormDecorator";
import { ValidateFeedback } from "./ValidateFeedback";

export const SendFeedback = (): MouseEventHandler<HTMLButtonElement> => {
  return FormDecorator(ValidateFeedback, async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }, "feedback-form");
};
