import axiosInstance from "../../../utils/axios";

export const getVideo = async (videoId: string) => {
  const response = await axiosInstance.get(`/videos/${videoId}`);
  return response.data;
};
