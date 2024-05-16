import { z } from "zod";

export const UpdateMembersSchema = z.object({
  projectId: z.string(),
  userList: z.array(z.string())
})
