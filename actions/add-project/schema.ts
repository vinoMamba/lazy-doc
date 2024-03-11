import { z } from "zod";

export const AddProjectSchema = z.object({
  projectName: z.string().min(3, "Project name must be at least 3 characters long"),
  description: z.string().optional(),
  isPublic: z.string().refine((value) => ["0", "1"].includes(value), "Invalid value")
})
