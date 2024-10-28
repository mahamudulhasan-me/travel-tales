import { handleFollow } from "@/services/userService";
import { IFollowInfo } from "@/type/user.type";
import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";

const useHandleFollow = (): UseMutationResult<void, Error, IFollowInfo> => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, IFollowInfo>({
    mutationFn: async (followInfo) => await handleFollow(followInfo),
    onSuccess: () => {
      // Invalidate and refetch the allUsers query
      //@ts-ignore
      queryClient.invalidateQueries(["allUsers"]);
    },
  });
};

export default useHandleFollow;
