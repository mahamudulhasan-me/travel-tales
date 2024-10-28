/* eslint-disable @typescript-eslint/no-explicit-any */
import { getPosts } from "@/services/postService";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

const useGetPosts = (
  limit: number,
  filterBy: string,
  sortBy: string,
  searchValue?: string
) => {
  return useQuery<any, Error>({
    queryKey: ["posts", limit, filterBy, sortBy, searchValue],
    queryFn: async () => await getPosts(limit, filterBy, sortBy, searchValue),
    keepPreviousData: true, // Keep the previous data while fetching new data
  } as UseQueryOptions<any, Error>); // Explicitly cast options
};

export default useGetPosts;
