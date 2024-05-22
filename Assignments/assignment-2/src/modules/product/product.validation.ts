import { z } from "zod";

// Define Zod schema for Variant
const VariantSchema = z.object({
  type: z.string({ message: "Product type is required" }),
  value: z.string({ message: "Product value is required" }),
});

// Define Zod schema for Inventory
const InventorySchema = z.object({
  quantity: z
    .number()
    .positive({ message: "Product quantity must be positive" })
    .int({ message: "Product quantity must be an integer" }),
  inStock: z.boolean({ message: "inStock must be boolean" }),
});

// Define Zod schema for Product
const ZodProductValidationSchema = z.object({
  name: z.string({ message: "Product name is required" }),
  description: z.string({ message: "Product description is required" }),
  price: z.number().positive({ message: "Product price must be positive" }),
  category: z.string({ message: "Product category is required" }),
  tags: z.array(z.string()).min(1, { message: "At least one tag is required" }),
  variants: z
    .array(VariantSchema)
    .min(1, { message: "At least one variant is required" }),
  inventory: InventorySchema,
});

export default ZodProductValidationSchema;
