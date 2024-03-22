"use server"
import { Action } from "@/types/action";
import { auth } from "@/lib/auth";
import { Project } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { DeleteProjectSchema } from "./schema";
import { deleteProject } from "@/data/project";


export const DeleteProjectAction: Action<z.infer<typeof DeleteProjectSchema>, Project> = async (values) => {
  const validateValues = DeleteProjectSchema.safeParse(values)

  if (!validateValues.success) {
    return {
      error: "Invalid input. Please try again."
    }
  }

  const { projectId } = validateValues.data
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return {
        error: "You are not logged in. Please log in and try again."
      }
    }

    const p = await deleteProject(projectId)

    revalidatePath("/project")
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
