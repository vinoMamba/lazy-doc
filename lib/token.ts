"use server"

import { cookies } from "next/headers"
import { z } from "zod"

export const getToken = async () => {
  const tokenInfoSchema = z.object({
    accessToken: z.string(),
    expiresIn: z.number()
  })
  const tokenCookie = cookies().get('token')
  const validateToken = tokenInfoSchema.safeParse(JSON.parse(tokenCookie?.value || ""))

  if (!validateToken.success) {
    return ""
  }

  const { accessToken } = validateToken.data
  return accessToken
}
