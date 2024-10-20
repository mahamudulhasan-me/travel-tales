import { payment } from "@/services/paymentService";
import { useMutation } from "@tanstack/react-query";

const useMakePremiumMutation = (userId: string) => {
  return useMutation({
    mutationKey: ["make-premium"],
    mutationFn: async () => await payment(userId),
  });
};

export default useMakePremiumMutation;
