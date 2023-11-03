import { MouseEventHandler } from "react";
import { FormDecorator } from "./FormDecorator";
import { ValidateLogin } from "./ValidateLogin";

export const SendLogin = (): MouseEventHandler<HTMLButtonElement> => {
  return FormDecorator(ValidateLogin, async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }, "login-form");
};
