import express from "express";
import protect from "../middlewares/auth.middleware.js";

import {
  getDashboardStats,
  getRecentOrders,
} from "../controllers/dashboard.controller.js";

const router = express.Router();

router.get(
  "/stats",
  protect,
  getDashboardStats
);

router.get(
  "/recent-orders",
  protect,
  getRecentOrders
);

export default router;