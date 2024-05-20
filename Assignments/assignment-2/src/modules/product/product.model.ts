import { Schema, model } from "mongoose";
import { IInventory, IProduct, IVariant } from "./product.interface";

const VariantSchema = new Schema<IVariant>({
  type: {
    type: String,
    required: true,
    message: "Product type is required",
  },
});

const InventorySchema = new Schema<IInventory>({
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

const ProductSchema = new Schema<IProduct>({
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

export const ProductModel = model<IProduct>("Product", ProductSchema);
