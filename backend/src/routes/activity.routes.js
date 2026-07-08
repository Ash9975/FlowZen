import express from "express";

import protect from "../middlewares/auth.middleware.js";

import {
    getActivities,
} from "../controllers/activity.controller.js";

const router = express.Router();

router.get(
    "/",
    protect,
    getActivities
);

export default router;