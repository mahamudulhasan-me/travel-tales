"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderControllers = void 0;
const product_model_1 = require("../product/product.model");
const order_service_1 = require("./order.service");
const order_validation_1 = __importDefault(require("./order.validation"));
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderPayload = req.body;
        const validOrder = order_validation_1.default.parse(orderPayload);
        // Check if the product exists and is in stock
        const product = yield product_model_1.ProductModel.findById(validOrder.productId);
        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found!",
            });
        }
        if (!product.inventory.inStock ||
            validOrder.quantity > product.inventory.quantity) {
            return res.status(400).json({
                success: false,
                message: "Insufficient quantity available in inventory",
            });
        }
        // Create the order
        const createdOrder = yield order_service_1.OrderServices.createOrder(validOrder);
        return res.status(200).json({
            success: true,
            message: "Order created successfully!",
            data: createdOrder,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong!",
            error: error.message,
        });
    }
});
const getOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.query;
        const orders = yield order_service_1.OrderServices.getOrders(email ? email : "");
        res.status(200).json({
            success: true,
            message: email
                ? "Orders fetched successfully for user email!"
                : "Orders fetched successfully!",
            data: orders,
        });
    }
    catch (error) {
        res.status(500).json({
            success: true,
            message: "Something went wrong!",
            error,
        });
    }
});
exports.OrderControllers = {
    createOrder,
    getOrders,
};
