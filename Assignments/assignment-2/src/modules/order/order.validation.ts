import { z } from "zod";

const ZodOrderValidationSchema = z.object({
  email: z.string().min(1, "Email is required!").email("Invalid email format!"),
  productId: z.string().min(1, "ProductId is required!"),
  price: z.number().min(0, "Price must be a positive number!"),
  quantity: z.number().min(1, "Quantity must be at least 1!"),
});

export default ZodOrderValidationSchema;
