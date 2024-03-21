import { z } from "zod";

export const AddGroupSchema = z.object({
  groupName: z.string()
    .min(1,"Group name is required")
    .max(30,"less than 30 characters")
})
