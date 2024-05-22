"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRouters = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
const { createProduct, getProductById, getProducts, updateProductById, deleteProductById, } = product_controller_1.ProductControllers;
router.get("/", getProducts);
router.get("/:productId", getProductById);
router.post("/", createProduct);
router.put("/:productId", updateProductById);
router.delete("/:productId", deleteProductById);
exports.ProductRouters = router;
