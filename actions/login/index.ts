"use server"

import { z } from "zod"
import { LoginSchema } from "./schema"
import { signIn } from "@/lib/auth"
import { DEFAULT_REDIRECT } from "@/config/routes"

export const loginAction = async (values: z.infer<typeof LoginSchema>) => {
  await signIn("credentials", {
    email: values.email,
    password: values.password,
    redirectTo: DEFAULT_REDIRECT
  })
}
