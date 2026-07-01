import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import { isTokenBlacklisted } from "../services/tokenBlacklist.service.js";

const protect = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not authorized.",
      });
    }

    // Check Redis blacklist first
    const blacklisted = await isTokenBlacklisted(token);

    if (blacklisted) {
      return res.status(401).json({
        success: false,
        message: "Session expired. Please login again.",
      });
    }

    // Verify JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET, {
      audience: "flowzen-users",
      issuer: "flowzen",
    });

    // Find user
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found.",
      });
    }

    req.user = user;

    next();

  } catch (error) {
    console.error(error);

    return res.status(401).json({
      success: false,
      message: "Invalid or expired token.",
    });
  }
};

export default protect;