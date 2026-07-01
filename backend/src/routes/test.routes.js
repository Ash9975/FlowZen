import express from "express";
import redis from "../config/redis.js";

const router = express.Router();

router.get("/redis", async (req, res) => {
    try {
        await redis.set("flowzen:test", "Redis is working!", "EX", 60);

        const value = await redis.get("flowzen:test");

        res.status(200).json({
            success: true,
            value,
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});

export default router;