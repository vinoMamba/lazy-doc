"use server"

import { z } from "zod"
import { getToken } from "@/lib/token"
import { UpdateEmailSchema, UpdatePasswordSchema } from "@/schema/user"

export const updatePasswordAction: Action<z.infer<typeof UpdatePasswordSchema>> = async (values) => {
  const token = await getToken()
  const validateValues = UpdatePasswordSchema.safeParse(values)

  if (!validateValues.success) {
    return {
      error: "Please enter valid params.",
    }
  }
  const { password, newPassword, confirmPassword } = validateValues.data

  if (password === newPassword) {
    return {
      error: "The new password is the same as the old.",
    }
  }

  if (confirmPassword !== newPassword) {
    return {
      error: "The new passwords entered do not match",
    }
  }

  try {
    const result = await fetch(`${process.env.NEXT_API_URL}/user/password`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(validateValues.data)
    })

    const json = await result.json();

    if (json.code === 0 && result.status === 200) {
      return {
        data: null
      }
    } else {
      return {
        error: json.message
      }
    }
  } catch (error) {
    return {
      error: "Invalid params. Please try again.",
    }
  }
}

export const updateEmailAction: Action<z.infer<typeof UpdateEmailSchema>> = async (values) => {
  const token = await getToken()
  const validateValues = UpdateEmailSchema.safeParse(values)

  if (!validateValues.success) {
    return {
      error: "Please enter valid params.",
    }
  }

  try {
    const result = await fetch(`${process.env.NEXT_API_URL}/user/email`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(validateValues.data)
    })

    const json = await result.json();

    if (json.code === 0 && result.status === 200) {
      return {
        data: null
      }
    } else {
      return {
        error: json.message
      }
    }
  } catch (error) {
    return {
      error: "Invalid params. Please try again.",
    }
  }
}
