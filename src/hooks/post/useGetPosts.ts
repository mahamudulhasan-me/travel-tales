import { getPosts } from "@/services/postService";
import { useQuery } from "@tanstack/react-query";

const useGetPosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: async () => await getPosts(),
  });
};

export default useGetPosts;
