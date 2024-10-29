import { handle7DaysAnalytics } from "@/services/reportService";
import { useQuery } from "@tanstack/react-query";

const useGet7DaysAnalytics = () => {
  return useQuery({
    queryKey: ["analytics", "7days"],
    queryFn: async () => await handle7DaysAnalytics(),
  });
};

export default useGet7DaysAnalytics;
