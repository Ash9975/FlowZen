import rateLimit from "express-rate-limit";

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,

  max: 10,

  message: {
    success: false,
    message:
      "Too many attempts. Try again later.",
  },

  standardHeaders: true,

  legacyHeaders: false,
});

export default authLimiter;