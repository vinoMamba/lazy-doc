"use client"
import { useEffect, useState } from "react"
import { FileTreeEmpty } from "./file-tree-empty"
import { Id, sortFlatData, useHeTree } from "he-tree-react"
import { ChevronDown, ChevronRight, FileCode2, FolderOpen } from "lucide-react"
import { FileItem, TreeItem } from "./tree-item"
import { cn } from "@/lib/utils"

type Props = {
  tree: FileItem[],
  projectId: string
}

export const FileTreeWrapper = ({ tree, projectId }: Props) => {
  const keys = { idKey: 'id', parentIdKey: 'parentId' };
  const [data, setData] = useState<FileItem[]>([]);
  useEffect(() => {
    if (tree) {
      const value = sortFlatData<FileItem>(tree, keys)
      setData(value)
    }
  }, [tree])
  const [openIds, setOpenIds] = useState<Id[]>([])

  const handleOpen = (id: Id, open: boolean) => {
    if (open) {
      setOpenIds([...openIds, id])
    } else {
      setOpenIds(openIds.filter(i => i !== id))
    }
  }
  const [currentItem, setCurrentItem] = useState<FileItem>()

  const { renderTree } = useHeTree({
    ...keys,
    data,
    dataType: 'flat',
    onChange: setData,
    openIds,
    canDrop(stat) {
      return stat.node.isDir
    },
    renderNodeBox({ stat, attrs, isPlaceholder }) {
      const selected = stat && (currentItem?.id === stat.node.id)
      return (
        <div
          {...attrs}
          key={attrs.key}
          className={
            cn(
              "hover:bg-primary-foreground relative before:absolute before:left-0 before:w-1 before:h-[1.75rem]",
              selected && "before:opacity-100 before:bg-accent text-accent-foreground before:border-l-2 before:border-l-accent-foreground/50 dark:before:border-0",
              selected ? 'bg-primary-foreground' : ''
            )
          }
          onClick={() => setCurrentItem(stat.node)}
        >
          {
            isPlaceholder
              ? <div>DROP HERE</div>
              : <div draggable={stat.draggable}>
                <TreeItem
                  projectId={projectId}
                  id={stat.node.id}
                  node={stat.node}
                  open={stat.open}
                  handleOpen={handleOpen}
                />
              </div>
          }
        </div>
      )
    },
  })
  return (
    <div className="flex-1 border rounded-md">
      {tree.length === 0
        ? (<FileTreeEmpty projectId={projectId} />)
        : (
          <div>
            {renderTree({ className: 'py-2' })}
          </div>
        )}
    </div>
  )
}
