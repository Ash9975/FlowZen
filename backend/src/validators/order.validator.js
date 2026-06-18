import { z } from "zod";

export const createOrderSchema = z.object({
  customerName: z.string().min(2),
});