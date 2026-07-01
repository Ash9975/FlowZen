import redis from "../config/redis.js";

//  Add JWT to Redis blacklist
//  @param {string} token
//  @param {number} ttl Remaining lifetime in seconds

export const blacklistToken = async (token, ttl) => {
  if (!token || !ttl) return;

  await redis.set(
    `blacklist:${token}`,
    "true",
    "EX",
    ttl
  );
};

// Check whether token is blacklisted

export const isTokenBlacklisted = async (token) => {
  if (!token) return false;

  const exists = await redis.get(
    `blacklist:${token}`
  );

  return exists !== null;
};