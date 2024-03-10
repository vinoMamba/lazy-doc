import { z } from "zod";

export const AddGroupSchema = z.object({
  groupName: z.string().min(3, "Group name must be at least 3 characters long"),
})
