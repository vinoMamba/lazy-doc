"use server"
import { z } from "zod";
import { RegisterSchema } from "./schema";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";
import { crypto } from "@/lib/crypto";
import { Action } from "@/types/action";
import { User } from "@prisma/client";

export const registerAction: Action<z.infer<typeof RegisterSchema>, User> = async (values) => {
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
    const u = await db.user.create({
      data: {
        name,
        password: hashedPassword,
        email,
      },
    })
    return {
      data: u,
    }
  } catch (error) {
    return { error: "Failed to create user" }
  }
}
