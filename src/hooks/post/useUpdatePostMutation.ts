/* eslint-disable @typescript-eslint/no-explicit-any */
import { updatePost } from "@/services/postService";
import { IPost, IPostCreate } from "@/type/post";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useUpdatePostMutation = (postId: string) => {
  const queryClient = useQueryClient(); // Initialize queryClient

  return useMutation<any, Error, IPostCreate>({
    mutationKey: ["UPDATE_POST"],
    mutationFn: async (postData) => await updatePost(postData, postId),
    onSuccess: () => {
      // Invalidate the `posts` query to ensure UI updates with new data
      //@ts-ignore
      queryClient.invalidateQueries(["posts"]);
    },
    // Optionally, you can implement optimistic updates here if needed
  });
};

export default useUpdatePostMutation;
