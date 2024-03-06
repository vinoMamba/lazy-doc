import { Folder, FolderMinus, Plus, Star } from "lucide-react"
import { GroupList } from "./group-list"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

const commonList = [
  {
    id: '-1',
    name: 'All projects',
    icon: <Folder className=" w-[1.2rem] h-[1.2rem]" />
  },
  {
    id: '0',
    name: 'Star projects',
    icon: <Star className="w-[1.2rem] h-[1.2rem]" />
  }
]
const apiList = [1, 2, 3, 4, 5, 6, 7, 8].map((i) => ({
  id: i.toString(),
  name: `API project${i}`,
  icon: <FolderMinus className=" w-[1.2rem] h-[1.2rem]" />
}))

export const GroupAside = () => {
  return (
    <aside className="w-1/6 flex flex-col gap-y-1">
      <GroupList list={commonList} />
      <Separator />
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm text-muted-foreground">Groups</p>
        <Button size="icon" asChild variant="ghost">
          <Plus className=" w-[1.2rem] h-[1.2rem]"/>
        </Button>
      </div>
      <GroupList list={apiList} />
    </aside>
  )
}
