import { z } from "zod";

export const MemberSchema = z.object({
  userId: z.string(),
  username: z.string(),
  email: z.string(),
  avatar: z.string(),
  permission: z.string(),
  projectId: z.string()
})

export const MemberListSchema = z.object({
  items: z.array(MemberSchema),
  ownerId: z.string()
})

export const UpdateMembersSchema = z.object({
  projectId: z.string(),
  userList: z.array(z.string())
})

export const UpdateMemberSchema = z.object({
  projectId: z.string(),
  userId: z.string(),
  permission: z.string()
})

export const DeleteMembersSchema = z.object({
  projectId: z.string(),
  userList: z.array(z.string())
})
