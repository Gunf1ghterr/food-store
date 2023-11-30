import { useMutation } from "@tanstack/react-query";
import { DeleteUserService } from "../services/DeleteUser.service";
import { AxiosError } from "axios";
import { useAuth } from "../components/contexts/AuthContext";
import { useCart } from "../components/contexts/CartContext";

export const useDeleteUser = (userId: number) => {
  const { setUser } = useAuth();
  const { setCartItems } = useCart();
  return useMutation({
    mutationFn: (userId: number) => DeleteUserService(userId),
    mutationKey: ["delete-user", userId],
    onError: (error: AxiosError) => {
      const alert = document.getElementById("userUpdateAlert");
      if (alert) {
        alert.textContent = error?.response?.data as string;
        alert.classList.remove("d-none");
      }
    },
    onSuccess: () => {
      setUser(null);
      setCartItems([]);
      localStorage.setItem("cart", "[]");
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
    retry: false,
  });
};
