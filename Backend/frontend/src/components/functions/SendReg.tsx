import { MouseEventHandler } from "react";
import { FormDecorator } from "./FormDecorator";
import { ValidateReg } from "./ValidateReg";

export const SendReg = (): MouseEventHandler<HTMLButtonElement> => {
  return FormDecorator(ValidateReg, async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }, "reg-form");
};
