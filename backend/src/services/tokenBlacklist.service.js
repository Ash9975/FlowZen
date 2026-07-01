import crypto from "crypto";
import redis from "../config/redis.js";

const getKey = (token) => {
    const hash = crypto
        .createHash("sha256")
        .update(token)
        .digest("hex");

    return `blacklist:${hash}`;
};

export const blacklistToken = async (token, ttl) => {
    if (!token || ttl <= 0) return;

    await redis.set(
        getKey(token),
        "true",
        "EX",
        ttl
    );
};

export const isTokenBlacklisted = async (token) => {
    if (!token) return false;

    const exists = await redis.get(getKey(token));

    return exists !== null;
};