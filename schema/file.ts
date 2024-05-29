import { z } from "zod";

export const AddFileSchema = z.object({
  projectId: z.string(),
  itemName: z.string(),
  parentId: z.string().optional(),
  isDir: z.boolean()
})

export const FileItemSchema = z.object({
  id: z.string(),
  name: z.string(),
  parentId: z.string().optional(),
  sort: z.number(),
  isDir: z.boolean()
})
