import { AsideList, ListItem } from "./aside-list"
import { getMineGroups } from "@/data/group"
import { GroupForm } from "./group-form"

const mainList: ListItem[] = [
  {
    id: 'all',
    groupName: "All project",
  },
  {
    id: 'trash',
    groupName: "Trash",
  },
]

export const MainAside = async () => {
  const groups = await getMineGroups()
  return (
    <aside className="w-1/5 flex-col gap-y-1 shrink-0 hidden md:flex">
      <AsideList list={mainList} />
      <GroupForm />
      <AsideList list={groups} />
    </aside>
  )
}
