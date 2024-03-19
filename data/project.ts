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

export const getProjects = async (groupId: string) => {
  const list = await db.groupProject.findMany({
    where: {
      groupId: groupId
    }
  })
  const projectIds = list.map(item => item.projectId)
  const projects = await db.project.findMany({
    where: {
      id: {
        in: projectIds
      },
      isDeleted: false
    }
  })
  return projects
}



export const getProjectsByGroupId = async (groupId: string) => {
  if (!groupId) {
    return []
  }
  else if (groupId === '0') {
    return getAllProjects()
  }
  else if (groupId === '-1') {
    return getStarredProjects()
  } else {
    return getProjects(groupId)
  }
}
