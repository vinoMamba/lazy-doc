import { auth } from "@/lib/auth"
import { db } from "@/lib/db"

export const getMineGroups = async () => {
  try {
    const session = await auth()
    const groups = await db.group.findMany({
      where: {
        createdBy: session?.user?.id
      },
      orderBy: {
        createdAt: 'asc'
      }
    })
    return groups
  } catch (error) {
    console.error(error)
    return []
  }
}
