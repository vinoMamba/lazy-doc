import { Group } from "@prisma/client"
import { FilePenLine, FolderMinus, Trash2 } from "lucide-react"
import { ContextMenuWrapper } from "../context-menu-wrapper"

export const GroupItem = ({ group }: { group: Partial<Group> }) => {

  return (
    <ContextMenuWrapper
      menuList={[
        {
          id: 'edit',
          item: (
            <div className="flex items-center gap-x-1">
              <FilePenLine className="w-[1rem] h-[1rem]" />
              Edit
            </div>)
        },
        {
          id: 'delete',
          item: (
            <div className="flex items-center gap-x-1">
              <Trash2 className="w-[1rem] h-[1rem] text-destructive" />
              Delete
            </div>)
        }
      ]}
    >
      <div className="flex items-center justify-start gap-x-1 w-full">
        <FolderMinus className="w-[1rem] h-[1rem] shrink-0" />
        <span className="truncate" title={group.groupName}>{group.groupName}</span>
      </div>
    </ContextMenuWrapper>
  )
}
