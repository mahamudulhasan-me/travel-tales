import { IOrder } from "./order.interface";
import { OrderModel } from "./order.model";

const createOrder = async (payload: IOrder) => {
  const createdOrder = await OrderModel.create(payload);

  return createdOrder;
};

const getOrders = async (email: string) => {
  let result;

  if (email) {
    result = await OrderModel.find({ email });
  } else {
    result = await OrderModel.find();
  }

  return result;
};

export const OrderServices = {
  createOrder,
  getOrders,
};
