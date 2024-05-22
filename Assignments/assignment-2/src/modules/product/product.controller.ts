import { Request, Response } from "express";
import { ZodError } from "zod";
import { ProductServices } from "./product.service";
import ZodProductValidationSchema from "./product.validation";

const createProduct = async (req: Request, res: Response) => {
  try {
    // Validate the request body
    const productData = ZodProductValidationSchema.parse(req.body);

    // Create the product
    const product = await ProductServices.createProduct(productData);

    // Send success response
    return res.status(201).json({
      success: true,
      message: "Product created successfully!",
      data: product,
    });
  } catch (error: unknown) {
    if (error instanceof ZodError) {
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
      error: (error as Error).message,
    });
  }
};

const getProducts = async (req: Request, res: Response) => {
  const searchTerm = req.query.searchTerm as string | undefined;

  try {
    const products = await ProductServices.getProducts(searchTerm ?? "");

    return res.status(200).json({
      success: true,
      message: searchTerm
        ? `Products matching search term ${searchTerm} fetched successfully!`
        : "Products fetched successfully!",
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

const getProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const product = await ProductServices.getProductById(productId);

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
  } catch (error: unknown) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

const updateProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const productData = req.body;

    // Validate product data
    const validDataForUpdate = ZodProductValidationSchema.parse(productData);

    // Check if the product exists
    const existingProduct = await ProductServices.getProductById(productId);
    if (!existingProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    // Update the product
    const updatedProduct = await ProductServices.updateProductById(
      productId,
      validDataForUpdate
    );

    return res.status(200).json({
      success: true,
      message: "Product updated successfully!",
      data: updatedProduct,
    });
  } catch (error: unknown) {
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
};

const deleteProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    // Check if the product exists
    const existingProduct = await ProductServices.getProductById(productId);
    if (!existingProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    // Delete the product
    const result = await ProductServices.deleteProductById(productId);

    res.status(200).json({
      success: true,
      message: "Product deleted successfully!",
      data: result,
    });
  } catch (error: unknown) {
    // Handle the error
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const ProductControllers = {
  createProduct,
  getProducts,
  getProductById,
  updateProductById,
  deleteProductById,
};
