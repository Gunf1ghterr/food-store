import { MouseEventHandler } from "react";
import { FormDecorator } from "./FormDecorator";
import { ValidateCheckout } from "./ValidateCheckout";

export const SendCheckout = (): MouseEventHandler<HTMLButtonElement> => {
  return FormDecorator(
    ValidateCheckout,
    async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    },
    "checkout-form"
  );
};
