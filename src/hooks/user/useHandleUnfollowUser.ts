import { handleUnFollow } from "@/services/userService";
import { IFollowInfo } from "@/type/user.type";
import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";

const useHandleUnfollow = (): UseMutationResult<void, Error, IFollowInfo> => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, IFollowInfo>({
    mutationFn: async (followInfo) => await handleUnFollow(followInfo),
    onSuccess: () => {
      // Invalidate and refetch the allUsers query
      //@ts-ignore
      queryClient.invalidateQueries(["allUsers"]);
    },
  });
};

export default useHandleUnfollow;
