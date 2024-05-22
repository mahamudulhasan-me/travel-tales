import express from "express";
import { ProductControllers } from "./product.controller";

const router = express.Router();

const {
  createProduct,
  getProductById,
  getProducts,
  updateProductById,
  deleteProductById,
} = ProductControllers;

router.get("/", getProducts);
router.get("/:productId", getProductById);
router.post("/", createProduct);
router.put("/:productId", updateProductById);
router.delete("/:productId", deleteProductById);

export const ProductRouters = router;
