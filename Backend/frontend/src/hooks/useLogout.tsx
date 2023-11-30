import { useQuery } from "@tanstack/react-query";
import { LogoutService } from "../services/Logout";

export const useLogout = (flag: boolean) => {
  return useQuery({
    queryKey: ["logout", flag],
    enabled: flag,
    queryFn: () => LogoutService(),
  });
};
