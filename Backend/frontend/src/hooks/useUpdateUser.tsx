import { useMutation } from "@tanstack/react-query";
import { IUser } from "../interfaces/IUser";
import { useAuth } from "../components/contexts/AuthContext";
import { UpdateUserService } from "../services/UpdateUser.service";
import { AxiosError } from "axios";

export const useUpdateUser = () => {
  const { setUser } = useAuth();
  return useMutation({
    mutationFn: (data: FormData) => UpdateUserService(data),
    mutationKey: ["update-user"],
    onSuccess: (data) => {
      const _user = data.data as IUser;
      setUser(_user);
      const modal = document.getElementById(
        "close-modal-user"
      ) as HTMLButtonElement;
      if (modal) {
        modal.click();
      }
      const cencel = document.getElementById(
        "cencel-user-update"
      ) as HTMLButtonElement;
      if (cencel) {
        cencel.click();
      }
    },
    onError: (error: AxiosError) => {
      const alert = document.getElementById("userUpdateAlert");
      if (alert) {
        alert.textContent = error?.response?.data as string;
        alert.classList.remove("d-none");
      }
    },
    retry: false,
  });
};
