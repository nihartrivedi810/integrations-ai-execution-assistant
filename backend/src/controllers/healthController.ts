import { Request, Response } from "express";
import { ok, ApiSuccess } from "../lib/errors";

type HealthResponse = ApiSuccess<{
  status: string;
  service: string;
  uptime: number;
}>;

export function getHealth(_req: Request, res: Response<HealthResponse>) {
  const payload = ok({
    status: "ok",
    service: "backend",
    uptime: process.uptime(),
  });

  res.json(payload);
}
