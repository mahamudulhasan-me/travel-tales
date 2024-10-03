import { createPost } from "@/services/postService";
import { IPost } from "@/type/post";
import { useMutation, UseMutationResult } from "@tanstack/react-query";

const useCreatePost = (): UseMutationResult<void, Error, IPost> => {
  return useMutation<void, Error, IPost>({
    mutationKey: ["CREATE_POST"],
    mutationFn: async (postData: IPost) => await createPost(postData),
  });
};
export default useCreatePost;
