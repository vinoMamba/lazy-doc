"use server"
import { Action } from "@/types/action";
import { AddOrEditProjectSchema } from "./schema";
import { auth } from "@/lib/auth";
import { z } from "zod";
import { Project } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { createProject, updateProject } from "@/data/project";


export const addOrEditProjectAction: Action<z.infer<typeof AddOrEditProjectSchema>, Project> = async (values) => {
  const validateValues = AddOrEditProjectSchema.safeParse(values)
  if (!validateValues.success) {
    return {
      error: "Invalid input. Please try again."
    }
  }
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return {
        error: "You are not logged in. Please log in and try again."
      }
    }
    const { id } = validateValues.data

    if (id) {
      const project = await updateProject(validateValues.data, session.user.id)
      revalidatePath("/project")
      return {
        data: project
      }
    } else {
      const project = await createProject(validateValues.data, session.user.id)
      revalidatePath("/project")
      return {
        data: project
      }
    }
  } catch (error) {
    console.error(error)
    return {
      error: "Something went wrong. Please try again."
    }
  }
}
