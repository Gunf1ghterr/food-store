import { MouseEventHandler } from "react";
import { FormDecorator } from "./FormDecorator";
import { ValidateLogin } from "./ValidateLogin";
import { UseMutateFunction } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const SendLogin = (
  _mutate: UseMutateFunction<AxiosResponse<any, any>, Error, FormData, unknown>
): MouseEventHandler<HTMLButtonElement> => {
  return FormDecorator(
    ValidateLogin,
    () => {
      const formData = new FormData(
        document.getElementById("login-form") as HTMLFormElement
      );
      _mutate(formData);
    },
    "login-form"
  );
};
