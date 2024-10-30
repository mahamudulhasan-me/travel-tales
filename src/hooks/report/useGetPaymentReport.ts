import { handleGetPaymentReport } from "@/services/reportService";
import { useQuery } from "@tanstack/react-query";

const useGetPaymentReport = () => {
  return useQuery({
    queryKey: ["report", "payment-report"],
    queryFn: async () => await handleGetPaymentReport(),
  });
};

export default useGetPaymentReport;
