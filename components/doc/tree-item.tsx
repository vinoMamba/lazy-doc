"use client"
import { Id } from "he-tree-react"
import { FileCode2, FolderClosed, FolderOpen } from "lucide-react"
import { FileItemDropdownMenu } from "./file-item-dropdown"
import { FileItem } from "@/hooks/use-file-item"
import { KeyboardEvent, useState } from "react"
import { Input } from "../ui/input"
import { useAction } from "@/hooks/use-action"
import { z } from "zod"
import { UpdateFileNameSchema } from "@/schema/file"
import { updateFileNameAction } from "@/action/update-file"
import { toast } from "sonner"

type Props = {
  projectId: string
  id: Id,
  node: FileItem
  open: boolean
  handleOpen: (id: Id, open: boolean) => void
}
export const TreeItem = ({ handleOpen, id, node, open, projectId }: Props) => {
  const [isEdit, setIsEdit] = useState(false)
  const [fileName, setFileName] = useState('')
  const { execute, isPending } = useAction<z.infer<typeof UpdateFileNameSchema>, null>(updateFileNameAction, {
    onSuccess: () => {
      toast.success("Update successfully")
      setIsEdit(false)
    },
    onError: (error) => {
      toast.error(error)
    }
  })
  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      execute({
        id: id.toString(),
        name: fileName
      })
    }
  }

  const onDoubleClick = () => {
    setFileName(node.name)
    setIsEdit(true)
  }

  return (
    <div
      className="p-1 px-2 flex items-center gap-2 cursor-pointer group ">
      <div className="flex items-center gap-2 flex-1 text-sm">
        <div onClick={() => handleOpen(id, !open)}>
          {node.isDir
            ? open
              ? <FolderOpen className="w-[1rem] h-[1rem]" />
              : <FolderClosed className="w-[1rem] h-[1rem]" />
            : <FileCode2 className="w-[1rem] h-[1rem]" />
          }
        </div>
        {
          isEdit
            ? <Input
              autoFocus
              onBlur={() => setIsEdit(false)}
              value={fileName}
              onKeyDown={onKeyDown}
              onChange={e => setFileName(e.target.value)}
            />
            : <span className="truncate py-1" onDoubleClick={onDoubleClick}>{node.name}</span>
        }
      </div>
      <FileItemDropdownMenu
        isDir={node.isDir}
        projectId={projectId}
        parentId={node.id}
        className=" group-hover:opacity-100"
      />
    </div>
  )
}
