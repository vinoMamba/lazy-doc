"use client"

import { fileAction } from "@/action/add-file"
import { useAction } from "@/hooks/use-action"
import { AddFileSchema } from "@/schema/file"
import { Tree, TreeDataItem } from "@/components/ui/tree"
import { FileTreeEmpty } from "./file-tree-empty"
import { Folder, Workflow } from "lucide-react"
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu"
import { z } from "zod"
import { toast } from "sonner"

type Props = {
  tree: any,
  projectId: string
}
export const FileTreeWrapper = ({ tree, projectId }: Props) => {

  const { execute } = useAction<
    z.infer<typeof AddFileSchema>, null>(fileAction, {
      onError(error) {
        toast.error(error)
      },
      onSuccess() {
        toast.success(`Create successfully.`)
      }
    })
  const handleClick = (item: TreeDataItem, isDir: boolean) => {
    execute({
      projectId,
      parentId: item.id,
      itemName: isDir ? 'New Folder' : "New File",
      isDir
    })
  }
  return (
    <div className="flex-1 border rounded-md">
      {tree.length === 0
        ? (<FileTreeEmpty projectId={projectId} />)
        : (
          <Tree
            data={tree}
            className="h-full"
            onSelectChange={(item) => { console.log(item) }}
            folderIcon={Folder}
            itemIcon={Workflow}
            leafRender={(item) => (
              <ContextMenu>
                <ContextMenuTrigger>
                  <span className="text-sm truncate w-full">{item.name}</span>
                </ContextMenuTrigger>
                <ContextMenuContent>
                  <ContextMenuItem>Delete</ContextMenuItem>
                </ContextMenuContent>
              </ContextMenu>
            )}
            itemRender={(item) => (
              <ContextMenu>
                <ContextMenuTrigger>
                  <span className="text-sm truncate w-full">{item.name}</span>
                </ContextMenuTrigger>
                <ContextMenuContent>
                  <ContextMenuItem onClick={() => handleClick(item, true)}>Add folder</ContextMenuItem>
                  <ContextMenuItem onClick={() => handleClick(item, false)}>Add file</ContextMenuItem>
                  <ContextMenuItem className=" hover:bg-destructive">Delete</ContextMenuItem>
                </ContextMenuContent>
              </ContextMenu>
            )}
          />
        )}
    </div>
  )
}
