"use server"
import { Action } from "@/types/action";
import { db } from "@/lib/db";
import { auth } from "@/lib/auth";
import { Project } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { StarProjectSchema } from "./schema";


export const starProjectAction: Action<z.infer<typeof StarProjectSchema>, Project> = async (values) => {
  const validateValues = StarProjectSchema.safeParse(values)

  if (!validateValues.success) {
    return {
      error: "Invalid input. Please try again."
    }
  }

  const { projectId, isStarred } = validateValues.data
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return {
        error: "You are not logged in. Please log in and try again."
      }
    }
    const p = await db.project.update({
      where: {
        id: projectId
      },
      data: {
        isStarred: isStarred
      }
    })
    revalidatePath("/workbench")
    return {
      data: p
    }
  } catch (error) {
    console.error(error)
    return {
      error: "Something went wrong. Please try again."
    }
  }
}
