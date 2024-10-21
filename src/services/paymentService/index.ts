import axiosInstance from "@/lib/AxiosInstance";

export const payment = async (userId: string) => {
  const { data } = await axiosInstance.post(`/payment`, { userId });
  return data;
};
