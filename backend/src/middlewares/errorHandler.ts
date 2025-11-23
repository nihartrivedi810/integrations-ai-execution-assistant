import { Request, Response, NextFunction } from "express";
import { AppError, ApiError } from "../lib/errors";
import { logger } from "../lib/logger";

export function errorHandler(
  err: unknown,
  _req: Request,
  res: Response<ApiError>,
  _next: NextFunction
) {
  let statusCode = 500;
  let message = "Internal server error";

  if (err instanceof AppError) {
    statusCode = err.statusCode;
    message = err.message;
  } else if (err instanceof Error) {
    message = err.message || message;
  }

  logger.error("request_error", {
    statusCode,
    message,
  });

  res.status(statusCode).json({
    success: false,
    error: { message },
  });
}
