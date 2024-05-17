"use server"

import { z } from "zod"
import { getToken } from "@/lib/token"
import { UpdateMembersSchema } from "@/schema/member"
import { revalidateTag } from "next/cache"

export const updateMembersAction: Action<z.infer<typeof UpdateMembersSchema>> = async (values) => {
  const token = await getToken()
  const validateValues = UpdateMembersSchema.safeParse(values)

  if (!validateValues.success) {
    return {
      error: "Please enter valid params.",
    }
  }
  try {
    const result = await fetch(`${process.env.NEXT_API_URL}/project/members/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(validateValues.data)
    })

    const json = await result.json();

    if (json.code === 0 && result.status === 200) {
      revalidateTag('projectMembers')
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
