import { MouseEventHandler } from "react";

export const FormDecorator = (
  formValidate: (form: HTMLFormElement) => number,
  func: () => void
): MouseEventHandler<HTMLButtonElement> => {
  return async (e: React.MouseEvent<HTMLButtonElement>) => {
    const form = e.currentTarget.form;
    if (form) {
      e.preventDefault();
      const error: number = formValidate(form);
      if (error === 0) {
        const spinner = document.getElementById("spinner") as HTMLDivElement;
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
