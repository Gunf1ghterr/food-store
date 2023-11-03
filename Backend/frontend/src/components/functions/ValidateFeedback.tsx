import { RemoveError } from "./RemoveError";
import { AddError } from "./AddError";

export const ValidateFeedback = (_form: HTMLFormElement): number => {
  let error: number = 0;
  let formReq = _form.querySelectorAll("[required]");
  for (let i = 0; i < formReq.length; i++) {
    const input = formReq[i] as HTMLInputElement;
    RemoveError(input);
    if (input.value.trim() === "") {
      AddError(input);
      error++;
    }
  }
  return error;
};
