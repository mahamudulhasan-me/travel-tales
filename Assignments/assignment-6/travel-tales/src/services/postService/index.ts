/* eslint-disable @typescript-eslint/no-explicit-any */

import axiosInstance from "@/lib/AxiosInstance";
import { IPost } from "@/type/post";

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
