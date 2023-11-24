import { MouseEventHandler } from "react";
import { FormDecorator } from "./FormDecorator";
import { ValidateNewUserData } from "./ValidateNewUserData";
import { useAuth } from "../contexts/AuthContext";
import { UseMutateFunction } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
export const SendNewUserData = (
  _mutate: UseMutateFunction<AxiosResponse<any, any>, Error, FormData, unknown>
): MouseEventHandler<HTMLButtonElement> => {
  const { user } = useAuth();
  return FormDecorator(
    ValidateNewUserData,
    async () => {
      const formData = new FormData(
        document.getElementById("user-form") as HTMLFormElement
      );
      formData.append("userId", user?.id.toString() as string);
      _mutate(formData);
    },
    "user-form"
  );
};
