import axiosInstance from "@/lib/AxiosInstance"; // Adjust the import based on your project structure
import { useQuery } from "@tanstack/react-query";

const useGetCommentQuery = (postId: string) => {
  return useQuery({
    queryKey: ["comments", postId],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/comment/${postId}`);
      return data; // Ensure this returns the correct format (array of comments)
    },
    enabled: !!postId, // Fetch only if postId is truthy
    refetchOnWindowFocus: true, // Optional: refetch when window is focused
    refetchOnReconnect: true, // Optional: refetch on reconnect
  });
};

export default useGetCommentQuery;
