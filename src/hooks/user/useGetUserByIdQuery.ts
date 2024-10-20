/* eslint-disable @typescript-eslint/no-explicit-any */
import { getUserById } from "@/services/userService";
import { useQuery } from "@tanstack/react-query";

const useGetUserByIdQuery = (userId: string) => {
  return useQuery<any, Error>({
    queryKey: ["users", userId],
    queryFn: async () => {
      const { data } = await getUserById(userId);
      return data;
    },
    enabled: !!userId,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  });
};
export default useGetUserByIdQuery;
