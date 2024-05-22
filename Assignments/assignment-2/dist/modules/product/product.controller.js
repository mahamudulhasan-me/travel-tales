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
exports.ProductControllers = void 0;
const zod_1 = require("zod");
const product_service_1 = require("./product.service");
const product_validation_1 = __importDefault(require("./product.validation"));
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Validate the request body
        const productData = product_validation_1.default.parse(req.body);
        // Create the product
        const product = yield product_service_1.ProductServices.createProduct(productData);
        // Send success response
        return res.status(201).json({
            success: true,
            message: "Product created successfully!",
            data: product,
        });
    }
    catch (error) {
        if (error instanceof zod_1.ZodError) {
            // Handle validation errors
            return res.status(400).json({
                success: false,
                message: "Validation error",
                errors: error.errors,
            });
        }
        // Handle other errors
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: error.message,
        });
    }
});
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const searchTerm = req.query.searchTerm;
    try {
        const products = yield product_service_1.ProductServices.getProducts(searchTerm !== null && searchTerm !== void 0 ? searchTerm : "");
        return res.status(200).json({
            success: true,
            message: searchTerm
                ? `Products matching search term ${searchTerm} fetched successfully!`
                : "Products fetched successfully!",
            data: products,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: error instanceof Error ? error.message : "Unknown error",
        });
    }
});
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const product = yield product_service_1.ProductServices.getProductById(productId);
        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }
        return res.status(200).json({
            success: true,
            message: "Product fetched successfully!",
            data: product,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: error instanceof Error ? error.message : "Unknown error",
        });
    }
});
const updateProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const productData = req.body;
        // Validate product data
        const validDataForUpdate = product_validation_1.default.parse(productData);
        // Check if the product exists
        const existingProduct = yield product_service_1.ProductServices.getProductById(productId);
        if (!existingProduct) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }
        // Update the product
        const updatedProduct = yield product_service_1.ProductServices.updateProductById(productId, validDataForUpdate);
        return res.status(200).json({
            success: true,
            message: "Product updated successfully!",
            data: updatedProduct,
        });
    }
    catch (error) {
        // Handle validation errors
        if (error instanceof Error && error.name === "ValidationError") {
            return res.status(400).json({
                success: false,
                message: error.message,
            });
        }
        // Handle other errors
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: error instanceof Error ? error.message : "Unknown error",
        });
    }
});
const deleteProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        // Check if the product exists
        const existingProduct = yield product_service_1.ProductServices.getProductById(productId);
        if (!existingProduct) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }
        // Delete the product
        const result = yield product_service_1.ProductServices.deleteProductById(productId);
        res.status(200).json({
            success: true,
            message: "Product deleted successfully!",
            data: result,
        });
    }
    catch (error) {
        // Handle the error
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: error instanceof Error ? error.message : "Unknown error",
        });
    }
});
exports.ProductControllers = {
    createProduct,
    getProducts,
    getProductById,
    updateProductById,
    deleteProductById,
};
