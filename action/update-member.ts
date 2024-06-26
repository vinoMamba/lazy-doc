"use server"

import { z } from "zod"
import { getToken } from "@/lib/token"
import { UpdateMemberSchema } from "@/schema/member"
import { revalidateTag } from "next/cache"

export const updateMemberAction: Action<z.infer<typeof UpdateMemberSchema>> = async (values) => {
  const token = await getToken()
  const validateValues = UpdateMemberSchema.safeParse(values)

  if (!validateValues.success) {
    return {
      error: "Please enter valid params.",
    }
  }
  try {
    const result = await fetch(`${process.env.NEXT_API_URL}/project/member/update`, {
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
