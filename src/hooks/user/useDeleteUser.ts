import { handleDeleteUser } from "@/services/userService";
import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";

const useDeleteUser = (): UseMutationResult<void, Error, string> => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, string>({
    mutationFn: async (userId) => await handleDeleteUser(userId),
    onSuccess: () => {
      // Invalidate and refetch the allUsers query
      //@ts-ignore
      queryClient.invalidateQueries(["allUsers"]);
    },
  });
};

export default useDeleteUser;
