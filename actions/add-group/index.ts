"use server"
import { Action } from "@/types/action";
import { AddGroupSchema } from "./schema";
import { db } from "@/lib/db";
import { auth } from "@/lib/auth";
import { z } from "zod";
import { Group } from "@prisma/client";
import { revalidatePath } from "next/cache";


export const addGroupAction: Action<z.infer<typeof AddGroupSchema>, Group> = async (values) => {
  const validateValues = AddGroupSchema.safeParse(values)

  if (!validateValues.success) {
    return {
      error: "Invalid group name. Please try again.",
    }
  }
  const { groupName } = validateValues.data
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return {
        error: "You are not logged in. Please log in and try again."
      }
    }
    const g = await db.group.create({
      data: {
        groupName,
        createdBy: session?.user?.id
      }
    })
    revalidatePath("/workbench")
    return {
      data: g
    }
  } catch (error) {
    console.error(error)
    return {
      error: "Something went wrong. Please try again."
    }
  }
}
