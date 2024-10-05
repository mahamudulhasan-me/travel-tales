import { handleVote } from "@/services/postService";
import { IPost, IVoteInfo } from "@/type/post";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useVoteMutation = (postId: string) => {
  const queryClient = useQueryClient();

  return useMutation<IPost, Error, IVoteInfo>({
    mutationKey: ["VOTE", postId], // Use specific post ID as part of the mutation key
    mutationFn: async (voteInfo) => await handleVote(voteInfo),
    // onSuccess: (updatedPost) => {
    //   // Invalidate the posts query to refetch the updated post data
    //   queryClient.setQueryData(["posts"], (oldPosts: IPost[] = []) =>
    //     oldPosts.map((post) =>
    //       post._id === updatedPost._id ? updatedPost : post
    //     )
    //   );
    // },
  });
};

export default useVoteMutation;
