import { NextFunction, Request, Response } from "express";
import CustomError from "./CustomError";

const errorHandler = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    message,
    error: {
      message: err.message,
    },
  });
};

export default errorHandler;
