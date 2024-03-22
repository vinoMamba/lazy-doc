import { AddOrEditProjectSchema } from "@/actions/add-project/schema";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
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

export const getProjectById = async (projectId: string) => {
  return db.project.findUnique({
    where: {
      id: projectId
    }
  })
}

export const getUserIdsByProjectId = async (projectId: string) => {
  const pList = await db.userProject.findMany({
    where: { projectId }
  })
  return pList.map((p) => p.userId)
}

export const createProject = async (project: z.infer<typeof AddOrEditProjectSchema>, userId: string) => {
  return db.$transaction(async (tx) => {
    const p = await tx.project.create({
      data: {
        projectName: project.projectName,
        description: project.description,
        createdBy: userId,
        updatedBy: userId
      }
    })
    await tx.userProject.create({
      data: {
        userId,
        projectId: p.id,
        createdBy: userId,
        updatedBy: userId
      }
    })
    return p
  })
}

export const updateProject = async (project: z.infer<typeof AddOrEditProjectSchema>, userId: string) => {
  return db.project.update({
    where: {
      id: project.id
    },
    data: {
      projectName: project.projectName,
      description: project.description,
      updatedBy: userId
    }
  })
}

export const deleteProject = async (projectId: string) => {
  return db.$transaction(async (tx) => {
    const p = await tx.project.update({
      where: {
        id: projectId
      },
      data: {
        isDeleted: true
      }
    })

    await tx.userProject.deleteMany({
      where: {
        projectId
      }
    })
    return p
  })
}
