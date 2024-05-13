"use server"

import { z } from "zod"
import { AddOrEditProjectSchema } from "@/schema/project"
import { getToken } from "@/lib/token"
import { revalidatePath } from "next/cache"

export const projectAction: Action<z.infer<typeof AddOrEditProjectSchema>> = async (values) => {
  const token = await getToken()
  const validateValues = AddOrEditProjectSchema.safeParse(values)

  if (!validateValues.success) {
    return {
      error: "Please enter a valid project name.",
    }
  }

  try {
    const isUpdate = !!validateValues.data.projectId
    const result = await fetch(`${process.env.NEXT_API_URL}/project/${isUpdate ? 'update' : 'save'}`, {
      method: isUpdate ? "PUT" : "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(validateValues.data)
    })
    const json = await result.json();
    if (json.code === 0 && result.status === 200) {
      revalidatePath("/project")
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
