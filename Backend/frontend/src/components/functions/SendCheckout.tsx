import { MouseEventHandler } from "react";
import { FormDecorator } from "./FormDecorator";
import { ValidateCheckout } from "./ValidateCheckout";
import { UseMutateFunction } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useAuth } from "../contexts/AuthContext";
import { useCart } from "../contexts/CartContext";

export const SendCheckout = (
  _mutate: UseMutateFunction<AxiosResponse<any, any>, Error, FormData, unknown>
): MouseEventHandler<HTMLButtonElement> => {
  const { user } = useAuth();
  const { cartItems } = useCart();
  return FormDecorator(
    ValidateCheckout,
    () => {
      const formData = new FormData(
        document.getElementById("checkout-form") as HTMLFormElement
      );
      formData.append("userId", user?.id.toString() as string);
      const total = cartItems.reduce(
        (total, item) => total + item.price * item.count,
        0
      );
      formData.append("total", total.toString());
      formData.append(
        "items",
        JSON.stringify(
          cartItems.map((item) => ({
            id: item.id,
            count: item.count,
          }))
        )
      );
      _mutate(formData);
    },
    "checkout-form"
  );
};
