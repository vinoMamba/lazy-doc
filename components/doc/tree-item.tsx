import { FileItemSchema } from "@/schema/file"
import { Id } from "he-tree-react"
import { ChevronDown, ChevronRight, Ellipsis, FileCode2, FolderClosed, FolderOpen } from "lucide-react"
import { z } from "zod"
import { FileItemDropdownMenu } from "./file-item-dropdown"

export type FileItem = z.infer<typeof FileItemSchema>

type Props = {
  projectId: string
  id: Id,
  node: FileItem
  open: boolean
  handleOpen: (id: Id, open: boolean) => void
}
export const TreeItem = ({ handleOpen, id, node, open, projectId }: Props) => {
  return (
    <div
      onClick={() => handleOpen(id, !open)}
      className="p-1 px-2 flex items-center gap-2 cursor-pointer group ">
      <div className="flex items-center gap-2 flex-1">
        {node.isDir
          ? open
            ? <FolderOpen className="w-[1.2rem] h-[1.2rem]" />
            : <FolderClosed className="w-[1.2rem] h-[1.2rem]" />
          : <FileCode2 className="w-[1.2rem] h-[1.2rem]" />
        }
        <span className="truncate">{node.name}</span>
      </div>
      <FileItemDropdownMenu
        projectId={projectId}
        parentId={node.id}
        className=" group-hover:opacity-100"
      />
    </div>
  )
}
