import { updatePost } from "@/services/postService";
import { IPost } from "@/type/post";
import { useMutation } from "@tanstack/react-query";

const useUpdatePostMutation = (postId: string) => {
  return useMutation<any, Error, IPost>({
    mutationKey: ["UPDATE_POST"],
    mutationFn: async (postData) => await updatePost(postData, postId),
  });
};

export default useUpdatePostMutation;
