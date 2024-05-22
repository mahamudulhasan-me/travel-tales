"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const order_route_1 = require("./modules/order/order.route");
const product_route_1 = require("./modules/product/product.route");
const app = (0, express_1.default)();
// parsers
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// routers
app.use("/api/products", product_route_1.ProductRouters);
app.use("/api/orders", order_route_1.OrderRouters);
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Product server is running!",
    });
});
app.get("*", (req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found!",
    });
});
exports.default = app;
