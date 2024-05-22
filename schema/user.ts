import { z } from "zod";

export const UserSchema = z.object({
  email: z.string(),
  username: z.string(),
  userId: z.string(),
  avatar: z.string()
})

export const UpdatePasswordSchema = z.object({
  password: z.string()
    .min(6, {
      message: "Password must be at least 6 characters long"
    }),
  newPassword: z.string()
    .min(6, {
      message: "Password must be at least 6 characters long"
    }),
  confirmPassword: z.string()
    .min(6, {
      message: "Password must be at least 6 characters long"
    }),
})

export const UpdateEmailSchema = z.object({
  email: z.string()
    .email({
      message: "Email is required"
    }),
})
