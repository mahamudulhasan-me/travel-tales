import { updatePost } from "@/services/postService";
import { IPost } from "@/type/post";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useUpdatePostMutation = (postId: string) => {
  const queryClient = useQueryClient(); // Initialize queryClient

  return useMutation<any, Error, IPost>({
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