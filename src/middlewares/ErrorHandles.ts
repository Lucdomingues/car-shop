import { NextFunction, Request, Response } from 'express';

export default class ErrorHandler extends Error {
  type: number;
  message: string;

  constructor(statusCode: number, message: string) {
    super();
    this.type = statusCode;
    this.message = message;
  }

  public static handle(
    error: ErrorHandler,
    _req: Request,
    res: Response,
    next: NextFunction,
  ) {
    res.status(error.type).json({ message: error.message });
    next();
  }
}
