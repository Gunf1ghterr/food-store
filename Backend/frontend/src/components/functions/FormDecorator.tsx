import { MouseEventHandler } from "react";

export const FormDecorator = (
  formValidate: (form: HTMLFormElement) => number,
  func: () => void,
  formName: string
): MouseEventHandler<HTMLButtonElement> => {
  return async (e: React.MouseEvent<HTMLButtonElement>) => {
    const form = document.getElementById(formName) as HTMLFormElement;
    if (form) {
      e.preventDefault();
      const error: number = formValidate(form);
      if (error === 0) {
        const spinner = document.getElementById(
          formName === "feedback-form"
            ? "spinner-feedback"
            : formName === "checkout-form"
            ? "spinner-checkout"
            : "spinner"
        ) as HTMLDivElement;
        form.classList.add("disabled");
        spinner.classList.add("spinner");

        await func();

        form.classList.remove("disabled");
        spinner.classList.remove("spinner");
        form.reset();
      } else {
      }
    }
  };
};
