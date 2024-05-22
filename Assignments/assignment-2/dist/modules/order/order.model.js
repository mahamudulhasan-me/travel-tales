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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = void 0;
const mongoose_1 = require("mongoose");
const product_model_1 = require("../product/product.model");
const OrderSchema = new mongoose_1.Schema({
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
OrderSchema.pre("save", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const productId = this.productId;
        const product = yield product_model_1.ProductModel.findById(productId);
        // Perform null and undefined checks before accessing nested properties
        if ((product === null || product === void 0 ? void 0 : product.inventory) && (product === null || product === void 0 ? void 0 : product.inventory.quantity) !== undefined) {
            product.inventory.quantity -= this.quantity;
            product.inventory.inStock = product.inventory.quantity > 0;
            // Save the updated product
            yield product.save();
        }
        else {
            throw new Error("Invalid product inventory");
        }
        next();
    });
});
exports.OrderModel = (0, mongoose_1.model)("Order", OrderSchema);
