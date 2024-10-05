"use client";
import { getPostByUser } from "@/services/postService";
import { useQuery } from "@tanstack/react-query";

const useGetPostByUserQuery = () => {
  return useQuery({
    queryKey: ["posts", "postByUser"],
    queryFn: async () => await getPostByUser(),
  });
};

export default useGetPostByUserQuery;
