import axiosInstance from "../../../utils/axios";

export const getRelatedVideos = async (query: string) => {
  const response = await axiosInstance.get(`/videos?${query}`);
  return response.data;
};
