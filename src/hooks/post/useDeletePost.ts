import { deletePost } from "@/services/postService";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useDeletePost = () => {
  const queryClient = useQueryClient(); // Initialize queryClient

  return useMutation<any, Error, string>({
    mutationKey: ["DELETE_POST"],
    mutationFn: async (postId) => await deletePost(postId),
    onSuccess: () => {
      // Invalidate the `posts` query to ensure UI updates with new data
      //@ts-ignore
      queryClient.invalidateQueries(["posts"]);
    },
    // Optionally, you can implement optimistic updates here if needed
  });
};

export default useDeletePost;
