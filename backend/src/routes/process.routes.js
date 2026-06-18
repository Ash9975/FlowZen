import express from "express";

import protect from "../middlewares/auth.middleware.js";

import {
  processOrder,
} from "../controllers/process.controller.js";

const router = express.Router();

router.post(
  "/:id/process",
  protect,
  processOrder
);

export default router;