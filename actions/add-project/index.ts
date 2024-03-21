"use server"
import { Action } from "@/types/action";
import { AddProjectSchema } from "./schema";
import { db } from "@/lib/db";
import { auth } from "@/lib/auth";
import { z } from "zod";
import { Project } from "@prisma/client";
import { revalidatePath } from "next/cache";


export const addProjectAction: Action<z.infer<typeof AddProjectSchema>, Project> = async (values) => {
  const validateValues = AddProjectSchema.safeParse(values)

  if (!validateValues.success) {
    return {
      error: "Invalid input. Please try again."
    }
  }
  const { projectName, description } = validateValues.data
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return {
        error: "You are not logged in. Please log in and try again."
      }
    }
    const p = await db.project.create({
      data: {
        projectName,
        description,
        createdBy: session.user.id
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
