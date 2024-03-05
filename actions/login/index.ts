"use server"

import { z } from "zod"
import { LoginSchema } from "./schema"
import { signIn } from "@/lib/auth"

export const loginAction = async (values: z.infer<typeof LoginSchema>) => {
  await signIn("credentials", {
    email: values.email,
    password: values.password,
    redirectTo: "/workbench"
  })
}
