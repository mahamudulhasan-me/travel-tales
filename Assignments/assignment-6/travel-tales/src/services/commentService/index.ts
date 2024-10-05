import axiosInstance from "@/lib/AxiosInstance";
import { IComment } from "@/type/comment";

export const getComments = async (postId: string): Promise<IComment[]> => {
  const { data } = await axiosInstance.get(`/comment/${postId}`);
  return data;
};
