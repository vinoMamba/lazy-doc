import { z } from "zod";

export const ChangePasswordSchema = z.object({
  oldPssword: z.string()
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

export const ChangeEmailSchema = z.object({
  email: z.string()
    .email({
      message: "Email is required"
    }),
})
