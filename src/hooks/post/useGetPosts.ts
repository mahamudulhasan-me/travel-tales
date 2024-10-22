/* eslint-disable @typescript-eslint/no-explicit-any */
import { getPosts } from "@/services/postService";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

const useGetPosts = (limit: number) => {
  return useQuery<any, Error>({
    queryKey: ["posts", limit],
    queryFn: async () => await getPosts(limit),
    keepPreviousData: true, // This option is valid in react-query 4.x
  } as UseQueryOptions<any, Error>); // Explicitly cast options
};

export default useGetPosts;
