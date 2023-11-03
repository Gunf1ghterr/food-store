import { MouseEventHandler } from "react";
import { FormDecorator } from "./FormDecorator";
import { ValidateSingin } from "./ValidateSingin";

export const SendSingin = (): MouseEventHandler<HTMLButtonElement> => {
  return FormDecorator(ValidateSingin, async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  });
};
