import { ChangeEventHandler } from "react";

export const FilePreview = (): ChangeEventHandler<HTMLInputElement> => {
  return (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadFile = (file: File): boolean => {
      if (!["image/jpeg", "image/png", "image/jpg"].includes(file.type)) {
        return false;
      }
      return true;
    };

    const file = e.target.files?.[0] as File;
    const image = document.getElementById("filePreview") as HTMLDivElement;
    image.innerHTML = "";
    const alert = document.getElementById("fileAlert") as HTMLDivElement;
    alert.classList.add("d-none");

    if (!file) {
      return;
    }

    if (uploadFile(file)) {
      const reader = new FileReader();
      reader.onload = function () {
        const img = document.createElement("img");
        img.style.maxWidth = "100%";
        img.src = reader.result as string;
        img.alt = file.name;
        image.appendChild(img);
      };
      reader.readAsDataURL(file);
    } else {
      e.currentTarget.value = "";
      alert.classList.remove("d-none");
    }
  };
};
