import { MouseEventHandler } from "react";
import { FormDecorator } from "./FormDecorator";
import { ValidateNewUserData } from "./ValidateNewUserData";
import { useAuth } from "../contexts/AuthContext";
export const SendNewUserData = (
  _username: string,
  _phone: string,
  _email: string,
  _birthday: Date
): MouseEventHandler<HTMLButtonElement> => {
  const { user, setUser } = useAuth();
  return FormDecorator(
    ValidateNewUserData,
    async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setUser({
        id: user?.id as number,
        username: _username,
        password: user?.password as string,
        token: user?.token as string,
        phone: _phone,
        email: _email,
        date: user?.date as Date,
        birthday: _birthday,
      });
      
    },
    "user-form"
  );
};
