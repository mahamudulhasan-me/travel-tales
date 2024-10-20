/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAllUser } from "@/services/userService";
import { useQuery } from "@tanstack/react-query";

const useGetAllUsersQuery = () => {
  return useQuery<any, Error>({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const { data } = await getAllUser();
      return data;
    },
    refetchOnWindowFocus: false, // Optional: Disable auto-refetching on focus if not needed
    refetchOnReconnect: true,
    staleTime: 1000 * 60 * 5, // Optional: Data is considered fresh for 5 minutes
  });
};

export default useGetAllUsersQuery;
