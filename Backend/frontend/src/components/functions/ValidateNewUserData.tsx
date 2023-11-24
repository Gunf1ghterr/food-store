import { AddError } from "./AddError";
import { RemoveError } from "./RemoveError";

export const ValidateNewUserData = (_form: HTMLFormElement): number => {
  function isValidEmail(email: string): boolean {
    const emailPattern: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailPattern.test(email);
  }

  function isValidateTel(tel: string): boolean {
    const numericRegex: RegExp = /^8[0-9]+$/;
    return tel.length === 11 && numericRegex.test(tel);
  }

  function isValidDate(date: string): boolean {
    const datePattern: RegExp =
      /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(19\d{2}|20\d{2})$/;
    return datePattern.test(date);
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
    if (input.type === "tel" && !isValidateTel(input.value.trim())) {
      AddError(input);
      error++;
    }

    if (input.id === "userBirthday" && !isValidDate(input.value.trim())) {
      AddError(input);
      error++;
    }
  }
  return error;
};
