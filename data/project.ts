import { auth } from "@/lib/auth";
import { db } from "@/lib/db";

export const getAllProjects = async () => {
  const session = await auth()
  if (!session?.user?.id) {
    return []
  }
  const publickProjects = await db.project.findMany({
    where: {
      isPublic: true,
      isDeleted: false,
      createdBy: {
        not: session.user.id
      }
    }
  })
  const myProjects = await db.project.findMany({
    where: {
      isDeleted: false,
      createdBy: session.user.id
    }
  })
  return [...publickProjects, ...myProjects]
}

export const getStarredProjects = async () => {
  const session = await auth()
  if (!session?.user?.id) {
    return []
  }
  const staredProjects = await db.project.findMany({
    where: {
      isStarred: true,
      isPublic: true,
      isDeleted: false,
      createdBy: {
        not: session.user.id
      }
    }
  })
  const myProjects = await db.project.findMany({
    where: {
      isStarred: true,
      isDeleted: false,
      createdBy: session.user.id
    }
  })
  return [...staredProjects, ...myProjects]
}


export const getProjectsByGroupId = async (groupId: string) => {
  if (!groupId) {
    return []
  }
  if (groupId === '0') {
    return getAllProjects()
  }
  if (groupId === '-1') {
    return getStarredProjects()
  }

  return []
}
