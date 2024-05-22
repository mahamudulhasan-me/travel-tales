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
exports.ProductServices = void 0;
const product_model_1 = require("./product.model");
const createProduct = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.create(payload);
    return result;
});
const getProducts = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    let result;
    if (searchTerm) {
        const regex = new RegExp(searchTerm, "i");
        result = yield product_model_1.ProductModel.find({
            $or: [{ name: regex }, { description: regex }, { tags: regex }],
        });
        // result = await ProductModel.find(
        //   {
        //     $text: { $search: searchTerm },
        //   },
        //   {
        //     score: { $meta: "textScore" },
        //   }
        // ).sort({ score: { $meta: "textScore" } });
    }
    else {
        result = yield product_model_1.ProductModel.find();
    }
    return result;
});
const getProductById = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield product_model_1.ProductModel.findById(productId);
    return product;
});
const updateProductById = (productId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedProduct = yield product_model_1.ProductModel.findByIdAndUpdate(productId, payload, {
        new: true,
    });
    return updatedProduct;
});
const deleteProductById = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.findByIdAndDelete(productId);
    return result;
});
exports.ProductServices = {
    createProduct,
    getProducts,
    getProductById,
    updateProductById,
    deleteProductById,
};
