/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import axiosInstance from "@/lib/AxiosInstance";
import { ICreateComment } from "@/type/comment";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useCreateCommentMutation = (postId: string) => {
  const queryClient = useQueryClient(); // Get the query client

  return useMutation<any, Error, ICreateComment>({
    mutationKey: ["CREATE_COMMENT"],
    mutationFn: async (commentInfo) =>
      await axiosInstance.post("/comment", commentInfo),
    onSuccess: () => {
      // Invalidate the comments query to refetch the latest comments
      //@ts-ignore
      queryClient.invalidateQueries(["comments", postId]);
    },
  });
};

export default useCreateCommentMutation;
