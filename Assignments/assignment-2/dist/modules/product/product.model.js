"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const mongoose_1 = require("mongoose");
const VariantSchema = new mongoose_1.Schema({
    type: {
        type: String,
        required: true,
        message: "Product type is required",
    },
    value: {
        type: String,
        required: true,
        message: "Product value is required",
    },
});
const InventorySchema = new mongoose_1.Schema({
    quantity: {
        type: Number,
        required: true,
        message: "Product quantity is required",
    },
    inStock: {
        type: Boolean,
        required: true,
        message: "Product inStock is required",
    },
});
const ProductSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        message: "Product name is required",
    },
    description: {
        type: String,
        required: true,
        message: "Product description is required",
    },
    price: {
        type: Number,
        required: true,
        message: "Product price is required",
    },
    category: {
        type: String,
        required: true,
        message: "Product category is required",
    },
    tags: {
        type: [String],
        required: true,
        message: "Product tags is required",
    },
    variants: {
        type: [VariantSchema],
        required: true,
        message: "Product variants is required",
    },
    inventory: {
        type: InventorySchema,
        required: true,
        message: "Product inventory is required",
    },
});
exports.ProductModel = (0, mongoose_1.model)("Product", ProductSchema);
