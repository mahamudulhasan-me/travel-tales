import axiosInstance from "../../../utils/axios";

export const getVideos = async (tags: string[], search: string) => {
  let query = "";
  if (tags) {
    query += tags.map((tag: string) => `tags_like=${tag}`).join("&");
  }
  if (search) {
    query += `&q=${search}`;
  }
  const response = await axiosInstance.get(`/videos?${query}`);
  return response.data;
};
