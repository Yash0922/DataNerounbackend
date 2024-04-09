const logger = require('../Utils/logger');

module.exports = (err, req, res, next) => {
  logger.error(err.stack);

  // Distinguish between different error types
  if (err.name === 'ValidationError') {
    return res.status(400).json({
      message: 'Invalid input',
      errors: Object.values(err.errors).map((e) => e.message),
    });
  } else if (err.message === 'Invalid username or password') {
    return res.status(401).json({
      message: 'Invalid username or password',
    });
  } else {
    return res.status(err.status || 500).json({
      message: err.message || 'Internal server error',
      stack: process.env.NODE_ENV === 'production' ? '' : err.stack,
    });
  }
};