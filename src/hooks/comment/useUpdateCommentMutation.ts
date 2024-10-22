/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import axiosInstance from "@/lib/AxiosInstance";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useUpdateCommentMutation = (commentId: string) => {
  interface IContent {
    content: string;
  }
  const queryClient = useQueryClient(); // Get the query client

  return useMutation<any, Error, IContent>({
    mutationKey: ["UPDATE_COMMENT"],
    mutationFn: async (content: IContent) =>
      await axiosInstance.patch(`/comment/${commentId}`, content),
    onSuccess: () => {
      // Invalidate the comments query to refetch the latest comments
      //@ts-ignore
      queryClient.invalidateQueries(["comments", commentId]);
    },
  });
};

export default useUpdateCommentMutation;
