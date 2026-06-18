import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(2),

  mobile: z
    .string()
    .regex(
      /^[6-9]\d{9}$/,
      "Invalid mobile number"
    ),

  password: z.string().min(6),
});

export const loginSchema = z.object({
  mobile: z
    .string()
    .regex(
      /^[6-9]\d{9}$/,
      "Invalid mobile number"
    ),

  password: z.string().min(6),
});