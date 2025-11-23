import { Request, Response, NextFunction } from "express";
import { logger } from "../lib/logger";

export function requestLogger(req: Request, res: Response, next: NextFunction) {
  const start = Date.now();

  res.on("finish", () => {
    const duration = Date.now() - start;
    logger.info("http_request", {
      method: req.method,
      path: req.path,
      statusCode: res.statusCode, 
      durationMs: duration,
    });
  });

  next();
}
