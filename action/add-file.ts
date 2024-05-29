"use server"

import { z } from "zod"
import { getToken } from "@/lib/token"
import { revalidateTag } from "next/cache"
import { AddFileSchema } from "@/schema/file"

export const addFileAction: Action<z.infer<typeof AddFileSchema>> = async (values) => {
  const token = await getToken()
  const validateValues = AddFileSchema.safeParse(values)

  if (!validateValues.success) {
    return {
      error: "Please enter a valid params.",
    }
  }

  try {
    const result = await fetch(`${process.env.NEXT_API_URL}/project/item/save`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(validateValues.data)
    })
    const json = await result.json();
    if (json.code === 0 && result.status === 200) {
      revalidateTag("fileItem")
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
      error: "Invalid project name. Please try again.",
    }
  }
}
