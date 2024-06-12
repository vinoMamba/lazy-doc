"use server"

import { z } from "zod"
import { getToken } from "@/lib/token"
import { AddDocSchema } from "@/schema/doc"

export const addDocAction: Action<z.infer<typeof AddDocSchema>> = async (values) => {
  const token = await getToken()
  const validateValues = AddDocSchema.safeParse(values)

  if (!validateValues.success) {
    return {
      error: "Please enter a valid params.",
    }
  }

  try {
    const result = await fetch(`${process.env.NEXT_API_URL}/doc`, {
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
      error: "Invalid content. Please try again.",
    }
  }
}
