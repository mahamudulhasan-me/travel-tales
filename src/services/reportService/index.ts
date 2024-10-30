import axiosInstance from "@/lib/AxiosInstance";

export const handle7DaysAnalytics = async () => {
  try {
    const { data } = await axiosInstance.get("/reports/analytics");
    return data;
  } catch (error) {
    new Error(error as string);
  }
};

export const handleGetPaymentReport = async () => {
  try {
    const { data } = await axiosInstance.get("/reports/payment-report");
    return data;
  } catch (error) {
    new Error(error as string);
  }
};
