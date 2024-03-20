"use server"
import { Action } from "@/types/action";
import { AddOrEditProjectSchema } from "./schema";
import { db } from "@/lib/db";
import { auth } from "@/lib/auth";
import { z } from "zod";
import { Project } from "@prisma/client";
import { revalidatePath } from "next/cache";


export const addOrEditProjectAction: Action<z.infer<typeof AddOrEditProjectSchema>, { project: Project, isEdit: boolean }> = async (values) => {
  const validateValues = AddOrEditProjectSchema.safeParse(values)

  if (!validateValues.success) {
    return {
      error: "Invalid input. Please try again."
    }
  }
  const { projectName, description, isPublic, id } = validateValues.data
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return {
        error: "You are not logged in. Please log in and try again."
      }
    }
    if (id) {
      const p = await db.project.update({
        where: {
          id
        },
        data: {
          projectName,
          description,
          isPublic: isPublic === "0" ? true : false
        }
      })
      revalidatePath("/workbench")
      return {
        data: {
          project: p,
          isEdit: true
        }
      }
    }

    const p = await db.project.create({
      data: {
        projectName,
        description,
        isPublic: isPublic === "0" ? true : false,
        createdBy: session.user.id
      }
    })
    revalidatePath("/workbench")
    return {
      data: {
        project: p,
        isEdit: false
      }
    }
  } catch (error) {
    console.error(error)
    return {
      error: "Something went wrong. Please try again."
    }
  }
}
