import { Group } from "@prisma/client"
import {  FolderMinus  } from "lucide-react"

export const GroupItem = ({ group }: { group: Partial<Group> }) => {

  return (
    <div className="flex items-center justify-start gap-x-1 w-full">
      <FolderMinus className="w-[1rem] h-[1rem] shrink-0" />
      <span className="truncate" title={group.groupName}>{group.groupName}</span>
    </div>
  )
}
