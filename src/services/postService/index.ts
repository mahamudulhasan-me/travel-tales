/* eslint-disable @typescript-eslint/no-explicit-any */

import axiosInstance from "@/lib/AxiosInstance";
import { IPost, IVoteInfo } from "@/type/post";

export const createPost = async (postData: IPost): Promise<IPost | any> => {
  try {
    const data = await axiosInstance.post("/post", postData);
    return data;
  } catch (error) {
    throw new Error(error as string);
  }
};

// Frontend: Fetch posts with limit and skip for infinite scroll
export const getPosts = async (
  limit = 5,
  filterBy = "default",
  sortBy = "default",
  searchValue = ""
) => {
  try {
    const response = await axiosInstance.get(`/post`, {
      params: { limit, filterBy, sortBy, searchValue },
    });
    return response.data; // Return the entire response data (posts and total count)
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

export const getPostByUser = async (userId: string) => {
  try {
    const { data } = await axiosInstance.get(`/post/postByUser/${userId}`);
    return data;
  } catch (error) {
    throw new Error(error as string);
  }
};

export const updatePost = async (data: IPost, postId: string) => {
  try {
    const { data: response } = await axiosInstance.patch(
      `/post/${postId}`,
      data
    );
    return response;
  } catch (error) {
    throw new Error(error as string);
  }
};
