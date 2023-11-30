import { useQuery } from "@tanstack/react-query";
import { GetMeService } from "../services/GetMe";
import { IUser } from "../interfaces/IUser";

export const useGetMe = () => {
  return useQuery({
    queryKey: ["getMe"],
    queryFn: () => GetMeService(),
    select: (data) => data.data as IUser,
    retry: false,
  });
};
