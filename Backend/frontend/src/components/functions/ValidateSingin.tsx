import { AddError } from "./AddError";
import { RemoveError } from "./RemoveError";

export const ValidateSingin = (_form: HTMLFormElement): number => {
  function isValidEmail(email: string): boolean {
    const emailPattern: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailPattern.test(email);
  }

  function isValidateTel(tel: string): boolean {
    const numericRegex: RegExp = /^8[0-9]+$/;
    return tel.length === 11 && numericRegex.test(tel);
  }

  function isValidPassword(password: string): boolean {
    return password.length >= 8;
  }
  let error: number = 0;
  let formReq = document.querySelectorAll("[required]");
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
    if (input.type === "tel" && !isValidateTel(input.value.trim())) {
      AddError(input);
      error++;
    }
  }
  return error;
};
