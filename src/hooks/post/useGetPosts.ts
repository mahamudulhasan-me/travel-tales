import { getPosts } from "@/services/postService";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

const useGetPosts = (limit: number, filterBy: string, sortBy: string) => {
  return useQuery<any, Error>({
    queryKey: ["posts", limit, filterBy, sortBy],
    queryFn: async () => await getPosts(limit, filterBy, sortBy),
    keepPreviousData: true, // Keep the previous data while fetching new data
  } as UseQueryOptions<any, Error>); // Explicitly cast options
};

export default useGetPosts;
