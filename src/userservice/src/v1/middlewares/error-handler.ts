import express from "express";
import HttpException from "../../type/http-exception";

function errorHandler(
  err: HttpException,
  _req: express.Request,
  res: express.Response,
  _next: express.NextFunction
): void {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Có gì đó sai sai";

  console.log(err.name);

  res.status(statusCode).json({
    status: false,
    message,
  });
}

export default errorHandler;
