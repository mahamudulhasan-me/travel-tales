"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const ZodOrderValidationSchema = zod_1.z.object({
    email: zod_1.z.string().min(1, "Email is required!").email("Invalid email format!"),
    productId: zod_1.z.string().min(1, "ProductId is required!"),
    price: zod_1.z.number().min(0, "Price must be a positive number!"),
    quantity: zod_1.z.number().min(1, "Quantity must be at least 1!"),
});
exports.default = ZodOrderValidationSchema;
