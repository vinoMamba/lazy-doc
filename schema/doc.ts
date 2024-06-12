import { z } from "zod";

export const AddDocSchema = z.object({
  docId: z.string(),
  docContent: z.string(),
})
