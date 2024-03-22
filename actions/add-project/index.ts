"use server"
import { Action } from "@/types/action";
import { AddProjectSchema } from "./schema";
import { auth } from "@/lib/auth";
import { z } from "zod";
import { Project } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { createProject } from "@/data/project";


export const addProjectAction: Action<z.infer<typeof AddProjectSchema>, Project> = async (values) => {
  const validateValues = AddProjectSchema.safeParse(values)
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

    const project = await createProject(validateValues.data, session.user.id)
    revalidatePath("/workbench")
    return {
      data: project
    }
  } catch (error) {
    console.error(error)
    return {
      error: "Something went wrong. Please try again."
    }
  }
}
