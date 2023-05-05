import { NextFunction, Request, Response } from 'express';

export default class ErrorHandler extends Error {
  type: number;
  message: string;

  constructor(type: number, message: string) {
    super();
    this.type = type;
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
