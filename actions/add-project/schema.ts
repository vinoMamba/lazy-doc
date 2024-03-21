import { z } from "zod";

export const AddProjectSchema = z.object({
  projectName: z.string()
    .max(30, "Project name must be at most 8 characters long"),
  description: z.string()
    .max(50, "Description must be at most 30 characters long")
    .optional(),
})
