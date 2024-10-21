"use client";
import { getPostByUser } from "@/services/postService";
import { useQuery } from "@tanstack/react-query";

const useGetPostByUserQuery = (userId: string) => {
  return useQuery({
    queryKey: ["posts", "postByUser"],
    queryFn: async () => await getPostByUser(userId),
  });
};

export default useGetPostByUserQuery;
