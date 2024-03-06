import Credentials from "next-auth/providers/credentials"

import type { NextAuthConfig, User } from "next-auth"
import { LoginSchema } from "@/actions/login/schema"
import { db } from "./db"
import { crypto } from "./crypto"
import { getUserByEmail } from "@/data/user"

export default {
  providers: [Credentials({
    name: "Credentials",
    async authorize(credentials) {
      const validateFiled = LoginSchema.safeParse(credentials)
      if (!validateFiled.success) {
        return null
      }
      const { email, password } = validateFiled.data

      const user = await getUserByEmail(email)
      if (!user) {
        return null
      }
      const decryptPassword = crypto.decryptByAES(user.password)
      if (password !== decryptPassword) {
        return null
      }
      return user
    }
  })],
} satisfies NextAuthConfig
