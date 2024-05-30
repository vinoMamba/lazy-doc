"use server"

import { z } from "zod"
import { getToken } from "@/lib/token"
import { revalidateTag } from "next/cache"
import { UpdateFileItemListSchema } from "@/schema/file"

export const updateFileListAction: Action<z.infer<typeof UpdateFileItemListSchema>> = async (values) => {
  const token = await getToken()
  const validateValues = UpdateFileItemListSchema.safeParse(values)

  if (!validateValues.success) {
    return {
      error: "Please enter a valid params.",
    }
  }

  try {
    const result = await fetch(`${process.env.NEXT_API_URL}/project/item/list/update`, {
      method: "PUT",
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
      error: "Invalid params. Please try again.",
    }
  }
}
