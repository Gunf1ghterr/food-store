export const InputChanged = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
): void => {
  e.currentTarget.classList.remove("error");
};
