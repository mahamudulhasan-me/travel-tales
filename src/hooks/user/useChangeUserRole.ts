import { handleChangeUserRole, IChangeRole } from "@/services/userService";
import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";

const useChangeUserRole = (): UseMutationResult<void, Error, IChangeRole> => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, IChangeRole>({
    mutationFn: async (userInfo) => await handleChangeUserRole(userInfo),
    onSuccess: () => {
      // Invalidate and refetch the allUsers query
      //@ts-ignore
      queryClient.invalidateQueries(["allUsers"]);
    },
  });
};

export default useChangeUserRole;
