import { z } from "zod";

export const MemberSchema = z.object({
  userId: z.string(),
  username: z.string(),
  email: z.string(),
  avatar: z.string(),
  permission: z.string(),
})

export const UpdateMembersSchema = z.object({
  projectId: z.string(),
  userList: z.array(z.string())
})
