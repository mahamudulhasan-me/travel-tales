import { Schema, model } from "mongoose";
import { ProductModel } from "../product/product.model";
import { IOrder } from "./order.interface";

const OrderSchema = new Schema<IOrder>({
  email: {
    type: String,
    required: true,
    message: "Email is required!",
  },
  productId: {
    type: String,
    required: true,
    message: "ProductId is required!",
  },
  price: {
    type: Number,
    required: true,
    message: "Price is required!",
  },
  quantity: {
    type: Number,
    required: true,
    message: "Quantity is required",
  },
});
OrderSchema.pre("save", async function (next) {
  const productId = this.productId;
  const product = await ProductModel.findById(productId);

  // Perform null and undefined checks before accessing nested properties
  if (product?.inventory && product?.inventory.quantity !== undefined) {
    product.inventory.quantity -= this.quantity;
    product.inventory.inStock = product.inventory.quantity > 0;

    // Save the updated product
    await product.save();
  } else {
    throw new Error("Invalid product inventory");
  }

  next();
});

export const OrderModel = model<IOrder>("Order", OrderSchema);
