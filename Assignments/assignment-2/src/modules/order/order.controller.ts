import { Request, Response } from "express";
import { ProductModel } from "../product/product.model";
import { OrderServices } from "./order.service";
import ZodOrderValidationSchema from "./order.validation";

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderPayload = req.body;
    const validOrder = ZodOrderValidationSchema.parse(orderPayload);

    // Check if the product exists and is in stock
    const product = await ProductModel.findById(validOrder.productId);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found!",
      });
    }

    if (
      !product.inventory.inStock ||
      validOrder.quantity > product.inventory.quantity
    ) {
      return res.status(400).json({
        success: false,
        message: "Insufficient quantity available in inventory",
      });
    }

    // Create the order
    const createdOrder = await OrderServices.createOrder(validOrder);

    return res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: createdOrder,
    });
  } catch (error: unknown) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong!",
      error: (error as Error).message,
    });
  }
};

const getOrders = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;
    const orders = await OrderServices.getOrders(
      email ? (email as string) : ""
    );
    res.status(200).json({
      success: true,
      message: email
        ? "Orders fetched successfully for user email!"
        : "Orders fetched successfully!",
      data: orders,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: "Something went wrong!",
      error,
    });
  }
};

export const OrderControllers = {
  createOrder,
  getOrders,
};
