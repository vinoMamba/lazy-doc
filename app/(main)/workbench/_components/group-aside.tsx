import { GroupList } from "./group-list"
import { Separator } from "@/components/ui/separator"
import { db } from "@/lib/db"
import { auth } from "@/lib/auth"
import { AddGroupButton } from "./add-group-button"

const commonList = [
  {
    id: '0',
    groupName: 'All projects',
  },
  {
    id: '-1',
    groupName: 'Star projects',
  }
]

export const GroupAside = async () => {
  const session = await auth()
  const groups = await db.group.findMany({
    where: {
      createdBy: session?.user?.id
    },
    orderBy: {
      createdAt: 'asc'
    }
  })
  return (
    <aside className="w-1/6 flex flex-col gap-y-1">
      <GroupList list={commonList} />
      <Separator />
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm text-muted-foreground">Groups</p>
        <AddGroupButton />
      </div>
      <GroupList list={groups} />
    </aside>
  )
}
