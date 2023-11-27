import { RemoveError } from "./RemoveError";
import { AddError } from "./AddError";

export const ValidateCheckout = (_form: HTMLFormElement): number => {
  function isValidEmail(email: string): boolean {
    const emailPattern: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailPattern.test(email);
  }
  function isValidateTel(tel: string): boolean {
    const numericRegex: RegExp = /^8[0-9]+$/;
    return tel.length === 11 && numericRegex.test(tel);
  }

  let error: number = 0;
  let formReq = _form.querySelectorAll("[required]");
  for (let i = 0; i < formReq.length; i++) {
    const input = formReq[i] as HTMLInputElement;
    RemoveError(input);
    if (input.value.trim() === "") {
      AddError(input);
      error++;
    }
    if (input.value.trim().length > 50 && input.id !== "checkoutAddress") {
      AddError(input);
      error++;
    }
    if (input.type === "email" && !isValidEmail(input.value.trim())) {
      AddError(input);
      error++;
    }
    if (input.type === "tel" && !isValidateTel(input.value.trim())) {
      AddError(input);
      error++;
    }
    if (input.id === "checkoutAddress" && input.value.trim().length < 10) {
      AddError(input);
      error++;
    }
  }
  return error;
};
