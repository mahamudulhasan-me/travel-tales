/* eslint-disable @typescript-eslint/ban-ts-comment */
import { createPost } from "@/services/postService";
import { IPostCreate } from "@/type/post";
import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";

const useCreatePost = (): UseMutationResult<void, Error, IPostCreate> => {
  const queryClient = useQueryClient(); // Get the query client

  return useMutation<void, Error, IPostCreate>({
    mutationKey: ["CREATE_POST"],
    mutationFn: async (postData: IPostCreate) => await createPost(postData),
    onSuccess: () => {
      // Invalidate and refetch posts after successful creation
      //@ts-ignore
      queryClient.invalidateQueries(["posts"]); // Using a string array is acceptable here
    },
  });
};

export default useCreatePost;
