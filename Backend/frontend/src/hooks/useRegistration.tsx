import { useMutation } from "@tanstack/react-query";
import { RegistrationService } from "../services/Registratiion.service";
import { IUser } from "../interfaces/IUser";
import { useAuth } from "../components/contexts/AuthContext";
import { AxiosError } from "axios";

export const useReg = () => {
  const { setUser } = useAuth();
  return useMutation({
    mutationFn: (data: FormData) => RegistrationService(data),
    mutationKey: ["reg"],
    onSuccess: (data) => {
      const _user = data.data as IUser;
      setUser(_user);
      const modal = document.getElementById("close-modal-login");
      if (modal) {
        modal.click();
      }
    },
    onError: (error: AxiosError) => {
      if (error.response?.status === 409) {
        const alert = document.getElementById("regAlert");
        if (alert) {
          alert.textContent = "Пользователь с такими данными уже существует";
          alert.classList.remove("d-none");
        }
      }
    },
    retry: false,
  });
};
