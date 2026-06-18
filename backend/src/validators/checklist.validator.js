import { z } from "zod";

export const checklistSchema = z.object({
  itemName: z.string().min(1),
  quantity: z.number().nullable().optional(),
  unit: z.string().optional(),
});