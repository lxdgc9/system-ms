function errorHandler(err, _req, res, _next) {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Có gì đó sai sai";

  console.log(err.name);

  res.status(statusCode).json({
    status: false,
    message,
  });
}

module.exports = errorHandler;
