import { z } from "zod";

export const ProjectSchema = z.object({
  projectId: z.string(),
  projectName: z.string(),
  description: z.string().nullable(),
  permission: z.string(),
  createdAt: z.string().nullable(),
})

export const ProjectListSchema = z.object({
  page: z.number(),
  pageSize: z.number(),
  total: z.number(),
  totalPage: z.number(),
  items: z.array(ProjectSchema)
})


export const AddOrEditProjectSchema = z.object({
  projectId: z.string().optional(),
  projectName: z.string().min(1).max(20),
  description: z.string().max(100).optional(),
})
