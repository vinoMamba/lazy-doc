"use server"
import { z } from "zod";
import { RegisterSchema } from "./schema";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";
import { crypto } from "@/lib/crypto";

export const registerAction = async (values: z.infer<typeof RegisterSchema>) => {
  const validateValues = RegisterSchema.safeParse(values);
  if (!validateValues.success) {
    return {
      error: "Invalid input",
    }
  }
  const { name, email, password } = validateValues.data
  try {
    const existUser = await getUserByEmail(email)
    if (existUser) {
      return { error: "User already exists" }
    }

    const hashedPassword = crypto.encryptByAES(password)
    await db.user.create({
      data: {
        name,
        password: hashedPassword,
        email,
      },
    })
  } catch (error) {
    return { error: "Failed to create user" }
  }
}
