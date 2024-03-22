"use client"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { Folder, Trash2 } from "lucide-react"
import { Group } from "@prisma/client"
import { GroupItem } from "./group-item"
import { ScrollArea } from "./ui/scroll-area"

export type ListItem = Partial<Group>

type Props = {
  list: Array<ListItem>
}

const AllItem = ({ groupName }: { groupName: string }) => {
  return (
    <div className=" flex items-center justify-start gap-x-1 w-full">
      <Folder className="w-[1rem] h-[1rem] shrink-0" />
      <span className="truncate" title={groupName}>{groupName}</span>
    </div>
  )
}

const TrashItem = ({ groupName }: { groupName: string }) => {
  return (
    <div className=" flex items-center justify-start gap-x-1 w-full">
      <Trash2 className="w-[1rem] h-[1rem] shrink-0" />
      <span className="truncate" title={groupName}>{groupName}</span>
    </div>
  )
}

export const AsideList = ({ list }: Props) => {
  const pathName = usePathname()
  return (
    <ScrollArea className="rounded-lg border bg-card text-card-foreground shadow-sm p-2 max-h-96">
      <div className="flex flex-col gap-y-1 " >
        {list.map((item) => (
          <Link
            key={item.id}
            href={`/project/${item.id}`}
            className={cn(
              buttonVariants({
                variant: pathName === `/project/${item.id}` ? "default" : "ghost"
              }),
            )}
          >
            {item.id === 'all'
              ? <AllItem groupName={item.groupName!} />
              : item.id === 'trash'
                ? <TrashItem groupName={item.groupName!} />
                : <GroupItem group={item} />
            }
          </Link>
        ))}
      </div>
    </ScrollArea>
  )
}
