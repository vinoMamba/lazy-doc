import { AddProjectSchema } from "@/actions/add-project/schema";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { Project } from "@prisma/client";
import { z } from "zod";

export const getAllProjects = async () => {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return []
    }

    const pList = await db.userProject.findMany({
      where: { userId: session.user.id }
    })

    const propjects = await db.project.findMany({
      where: {
        id: { in: pList.map((p) => p.projectId) }
      }
    })
    return propjects
  } catch (error) {
    console.error(error)
    return []
  }
}

export const createProject = async (project: z.infer<typeof AddProjectSchema>, userId: string) => {
  return db.$transaction(async (tx) => {
    const p = await tx.project.create({
      data: {
        projectName: project.projectName,
        description: project.description,
        createdBy: userId,
      }
    })
    await tx.userProject.create({
      data: {
        userId,
        projectId: p.id,
        createdBy: userId,
      }
    })
    return p
  })
}
