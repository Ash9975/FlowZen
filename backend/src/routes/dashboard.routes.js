import express from "express";
import protect from "../middlewares/auth.middleware.js";

import {
  getDashboardStats,
  getRecentOrders,
  getWeeklyPerformance
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

router.get(
  "/weekly-performance",
  protect,
  getWeeklyPerformance
);

export default router;