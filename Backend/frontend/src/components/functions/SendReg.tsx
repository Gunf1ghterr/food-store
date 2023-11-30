import { MouseEventHandler } from "react";
import { FormDecorator } from "./FormDecorator";
import { ValidateReg } from "./ValidateReg";
import { UseMutateFunction } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const SendReg = (
  _mutate: UseMutateFunction<AxiosResponse<any, any>, Error, FormData, unknown>
): MouseEventHandler<HTMLButtonElement> => {
  return FormDecorator(
    ValidateReg,
    () => {
      const formData = new FormData(
        document.getElementById("reg-form") as HTMLFormElement
      );
      formData.append("regRole", "customer");
       _mutate(formData);
    },
    "reg-form"
  );
};
