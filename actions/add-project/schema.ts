import { z } from "zod";

export const AddProjectSchema = z.object({
  projectName: z.string()
    .min(3, "Project name must be at least 3 characters long")
    .max(8, "Project name must be at most 8 characters long"),
  description: z.string()
    .max(30, "Description must be at most 30 characters long")
    .optional(),
  isPublic: z.string().refine((value) => ["0", "1"].includes(value), "Invalid value")
})
