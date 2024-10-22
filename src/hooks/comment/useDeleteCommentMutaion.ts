/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import axiosInstance from "@/lib/AxiosInstance";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useDeleteCommentMutation = (commentId: string) => {
  const queryClient = useQueryClient(); // Get the query client

  return useMutation<any, Error>({
    mutationKey: ["DELETE_COMMENT"],
    mutationFn: async () => await axiosInstance.delete(`/comment/${commentId}`),
    onSuccess: () => {
      // Invalidate the comments query to refetch the latest comments
      //@ts-ignore
      queryClient.invalidateQueries(["comments", commentId]);
    },
  });
};

export default useDeleteCommentMutation;
