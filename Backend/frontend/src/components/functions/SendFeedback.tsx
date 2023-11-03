import { MouseEventHandler } from "react";

const addError = (input: HTMLInputElement): void => {
  input.classList.add("error");
};

const removeError = (input: HTMLInputElement): void => {
  input.classList.remove("error");
};

const formValidate = (_form: HTMLFormElement): number => {
  let error: number = 0;
  let formReq = document.querySelectorAll("[required]");
  for (let i = 0; i < formReq.length; i++) {
    const input = formReq[i] as HTMLInputElement;
    removeError(input);
    if (input.value.trim() === "") {
      addError(input);
      error++;
    }
  }
  return error;
};

export const SendFeedback = (): MouseEventHandler<HTMLButtonElement> => {
  return async (e: React.MouseEvent<HTMLButtonElement>) => {
    const form = e.currentTarget.form;
    if (form) {
      e.preventDefault();
      const error: number = formValidate(form);
      if (error === 0) {
        const spinner = document.getElementById("spinner") as HTMLDivElement;
        form.classList.add("disabled");
        spinner.classList.add("spinner");
        console.log(spinner);
        await new Promise((resolve) => setTimeout(resolve, 1000)); // временно
        form.classList.remove("disabled");
        spinner.classList.remove("spinner");
        form.reset();
      } else {
      }
    }
  };
};
