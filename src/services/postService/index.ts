/* eslint-disable @typescript-eslint/no-explicit-any */

import axiosInstance from "@/lib/AxiosInstance";
import { IPost, IVoteInfo } from "@/type/post";
import { getCurrentUser } from "../authService";

export const createPost = async (postData: IPost): Promise<IPost | any> => {
  try {
    const data = await axiosInstance.post("/post", postData);
    return data;
  } catch (error) {
    throw new Error(error as string);
  }
};

export const getPosts = async () => {
  try {
    const data = await axiosInstance.get("/post");
    return data;
  } catch (error) {
    throw new Error(error as string);
  }
};

export const handleVote = async (voteInfo: IVoteInfo) => {
  try {
    const { data } = await axiosInstance.post("/post/vote", voteInfo); // Use POST instead of GET
    return data; // Assuming you return the updated post or vote result from the backend
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to submit vote");
  }
};

export const getPostByUser = async () => {
  const user = await getCurrentUser();
  try {
    const { data } = await axiosInstance.get(`/post/postByUser/${user?._id}`);
    return data;
  } catch (error) {
    throw new Error(error as string);
  }
};
