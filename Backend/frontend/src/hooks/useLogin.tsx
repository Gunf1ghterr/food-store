import { useMutation } from "@tanstack/react-query";
import { LoginService } from "../services/Login.service";
import { IUser } from "../interfaces/IUser";
import { useAuth } from "../components/contexts/AuthContext";
import { AxiosError } from "axios";

export const useLogin = () => {
  const { setUser } = useAuth();
  return useMutation({
    mutationFn: (data: FormData) => LoginService(data),
    mutationKey: ["login"],
    onSuccess: (data) => {
      const _user = data.data as IUser;
      setUser(_user);
      const modal = document.getElementById("close-modal-login");
      if (modal) {
        modal.click();
      }
    },
    onError: (error: AxiosError) => {
      if (error.response?.status === 404) {
        const alert = document.getElementById("loginAlert");
        if (alert) {
          alert.textContent = "Нет такого пользователя";
          alert.classList.remove("d-none");
        }
      }
    },
    retry: false,
  });
};
