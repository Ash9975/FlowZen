import express from "express";
import protect from "../middlewares/auth.middleware.js";
import upload from "../middlewares/upload.middleware.js"
import { createOrder, completeOrder, getOrders, getOrderById, updateOrder, deleteOrder } from "../controllers/order.controller.js";

const router = express.Router();
router.post("/", protect, upload.single("file"), createOrder)
router.get("/", protect, getOrders);
router.get("/:id", protect, getOrderById);
router.put("/:id", protect, updateOrder);
router.delete("/:id", protect, deleteOrder);
router.patch(  "/:id/complete",  protect,  completeOrder);

export default router;