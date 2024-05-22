import { Router } from "express";
import { OrderControllers } from "./order.controller";

const router = Router();

const { createOrder, getOrders } = OrderControllers;

router.get("/", getOrders);
router.post("/", createOrder);

export const OrderRouters = router;
