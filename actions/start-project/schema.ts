import { z } from "zod";

export const StarProjectSchema = z.object({
  projectId: z.string(),
  isStarred: z.boolean()
})
