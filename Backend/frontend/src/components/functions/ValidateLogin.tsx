import { AddError } from "./AddError";
import { RemoveError } from "./RemoveError";

export const ValidateLogin = (_form: HTMLFormElement): number => {
  function isValidEmail(email: string): boolean {
    const emailPattern: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailPattern.test(email);
  }

  function isValidPassword(password: string): boolean {
    return password.length >= 8;
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
    if (input.value.trim().length > 50) {
      AddError(input);
      error++;
    }
    if (input.type === "email" && !isValidEmail(input.value.trim())) {
      AddError(input);
      error++;
    }
    if (input.type === "password" && !isValidPassword(input.value.trim())) {
      AddError(input);
      error++;
    }
  }
  return error;
};
