const errorResponse = require("../utils/errorResponse");
const errorHandler = (err, req, res, next) => {
  console.log(err.stack);

  if (err.code === 11000) {
    const message = "Dupicate field value";
    err = new ErrorResponse(message, 400);
  }

  res.status(err.statusCode || 500).json({
    success: false,
    error: err.message || "Server Error",
  });
};

module.exports = errorHandler;
