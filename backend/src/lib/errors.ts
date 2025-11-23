export class AppError extends Error {
  public readonly statusCode: number;
  public readonly isOperational: boolean;

  constructor(message: string, statusCode = 500, isOperational = true) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;

    Object.setPrototypeOf(this, new.target.prototype);
    Error.captureStackTrace(this);
  }
}

export function badRequest(message: string) {
  return new AppError(message, 400);
}

export function notFound(message: string) {
  return new AppError(message, 404);
}

export function internalError(message = "Internal server error") {
  return new AppError(message, 500);
}

export type ApiSuccess<T> = {
  success: true;
  data: T;
};

export type ApiError = {
  success: false;
  error: {
    message: string;
  };
};

export function ok<T>(data: T): ApiSuccess<T> {
  return { success: true, data };
}
