import { payment } from "@/services/paymentService";
import { useMutation } from "@tanstack/react-query";

const useMakePremiumMutation = () => {
  return useMutation({
    mutationKey: ["make-premium"],
    mutationFn: async (userId: string) => await payment(userId),
  });
};

export default useMakePremiumMutation;
