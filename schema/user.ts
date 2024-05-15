import { z } from "zod";

export const User = z.object({
  email: z.string(),
  username: z.string(),
  userId: z.string(),
  avatar: z.string()
})
