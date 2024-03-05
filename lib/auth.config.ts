import Credentials from "next-auth/providers/credentials"

import type { NextAuthConfig, User } from "next-auth"
import { LoginSchema } from "@/actions/login/schema"

export default {
  providers: [Credentials({
    name: "Credentials",
    async authorize(credentials) {
      const validateFields = LoginSchema.safeParse(credentials)
      if (!validateFields.success) {
        return null
      }
      const { email } = validateFields.data
      const user: User = { id: "1", name: "John Doe", email }
      return user
    }
  })],
} satisfies NextAuthConfig
