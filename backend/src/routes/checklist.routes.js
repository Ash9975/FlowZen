import express from "express";

import protect from "../middlewares/auth.middleware.js";

import {
    createChecklistItem,
    getChecklistItems,
    toggleChecklistItem,
    deleteChecklistItem,
    updateChecklistItem
} from "../controllers/checklist.controller.js";

const router = express.Router();

router.post(
    "/:orderId",
    protect,
    createChecklistItem
);

router.get(
    "/:orderId",
    protect,
    getChecklistItems
);

router.patch(
    "/:itemId/toggle",
    protect,
    toggleChecklistItem
);

router.delete(
    "/:itemId",
    protect,
    deleteChecklistItem
);

router.put(
  "/:itemId",
  protect,
  updateChecklistItem
);

export default router;