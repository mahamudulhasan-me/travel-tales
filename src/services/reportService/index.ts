import axiosInstance from "@/lib/AxiosInstance";

export const handle7DaysAnalytics = async () => {
  try {
    const { data } = await axiosInstance.get("/reports/analytics");
    return data;
  } catch (error) {
    new Error(error as string);
  }
};
