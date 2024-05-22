"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
// Define Zod schema for Variant
const VariantSchema = zod_1.z.object({
    type: zod_1.z.string({ message: "Product type is required" }),
    value: zod_1.z.string({ message: "Product value is required" }),
});
// Define Zod schema for Inventory
const InventorySchema = zod_1.z.object({
    quantity: zod_1.z
        .number()
        .positive({ message: "Product quantity must be positive" })
        .int({ message: "Product quantity must be an integer" }),
    inStock: zod_1.z.boolean({ message: "inStock must be boolean" }),
});
// Define Zod schema for Product
const ZodProductValidationSchema = zod_1.z.object({
    name: zod_1.z.string({ message: "Product name is required" }),
    description: zod_1.z.string({ message: "Product description is required" }),
    price: zod_1.z.number().positive({ message: "Product price must be positive" }),
    category: zod_1.z.string({ message: "Product category is required" }),
    tags: zod_1.z.array(zod_1.z.string()).min(1, { message: "At least one tag is required" }),
    variants: zod_1.z
        .array(VariantSchema)
        .min(1, { message: "At least one variant is required" }),
    inventory: InventorySchema,
});
exports.default = ZodProductValidationSchema;
