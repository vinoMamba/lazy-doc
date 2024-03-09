"use server"
import { z } from "zod";
import { ChangePasswordSchema, ChangeEmailSchema } from "./schema";
import { db } from "@/lib/db";
import { getUserByEmail, getUserById } from "@/data/user";
import { crypto } from "@/lib/crypto";
import { Action } from "@/types/action";
import { User } from "@prisma/client";
import { auth } from "@/lib/auth";

export const changePasswordAction: Action<z.infer<typeof ChangePasswordSchema>, User> = async (values) => {
  const validateValues = ChangePasswordSchema.safeParse(values)

  if (!validateValues.success) {
    return {
      error: "Invalid fields"
    }
  }
  const { oldPssword, confirmPassword, newPassword } = validateValues.data
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return {
        error: "Unauthorized"
      }
    }

    const existsUser = await getUserById(session.user.id)
    if (!existsUser) {
      return {
        error: "Cunrrent user not found"
      }
    }
    const hashPassword = crypto.decryptByAES(existsUser.password)

    if (hashPassword !== oldPssword) {
      return {
        error: "Old password is incorrect"
      }
    }
    if (newPassword !== confirmPassword) {
      return {
        error: "Passwords do not match"
      }
    }

    const newPasswordHash = crypto.encryptByAES(newPassword)

    const user = await db.user.update({
      where: {
        id: session.user.id,
      },
      data: {
        password: newPasswordHash,
      },
    })
    return {
      data: user
    }
  } catch (error) {
    return {
      error: "Something went wrong"
    }
  }
}

export const changeEmailAction: Action<z.infer<typeof ChangeEmailSchema>, User> = async (values) => {
  const validateValues = ChangeEmailSchema.safeParse(values)

  if (!validateValues.success) {
    return {
      error: "Invalid fields"
    }
  }

  const { email } = validateValues.data

  try {
    const existsUser = await getUserByEmail(email)
    if (existsUser) {
      return {
        error: "Email already exists"
      }
    }

    const session = await auth()
    if (!session?.user?.id) {
      return {
        error: "Cunrrent user not found"
      }
    }

    const user = await db.user.update({
      where: {
        id: session.user.id,
      },
      data: {
        email,
      },
    })
    return {
      data: user
    }
  } catch (error) {
    return {
      error: "Something went wrong"
    }
  }
}
