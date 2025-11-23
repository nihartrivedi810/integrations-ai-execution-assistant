import { Request, Response, NextFunction } from "express";
import { notFound, ApiError } from "../lib/errors";

export function notFoundHandler(
  _req: Request,
  _res: Response<ApiError>,
  next: NextFunction
) {
  next(notFound("Route not found"));
}
