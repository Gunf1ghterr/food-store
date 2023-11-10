import { MouseEventHandler } from "react";
import { FormDecorator } from "./FormDecorator";
import { ValidateLogin } from "./ValidateLogin";
import { useAuth } from "../contexts/AuthContext";

export const SendLogin = (): MouseEventHandler<HTMLButtonElement> => {
  const { setUser } = useAuth();
  return FormDecorator(
    ValidateLogin,
    async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setUser({
        id: 1,
        username: "Иван Иванов",
        password: "123",
        token: "123",
        phone: "89999999999",
        email: "test@testmail.ru",
      });
      document.cookie = `token=${1}`;
      window.location.href = "/";
    },
    "login-form"
  );
};
