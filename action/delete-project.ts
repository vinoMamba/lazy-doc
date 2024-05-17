"use server"

import { getToken } from "@/lib/token"
import { revalidatePath } from "next/cache"

export const deleteProjectAction: Action<string> = async (projectId) => {
  const token = await getToken()
  try {
    const result = await fetch(`${process.env.NEXT_API_URL}/project/delete?projectId=${projectId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
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
