"use client"
import { addFileAction } from "@/action/add-file"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { useAction } from "@/hooks/use-action"
import { cn } from "@/lib/utils"
import { AddFileSchema } from "@/schema/file"
import { Ellipsis } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"
import { z } from "zod"

type Props = {
  className?: string
  projectId: string
  parentId: string
  isDir: boolean
}

export const FileItemDropdownMenu = ({ className, projectId, parentId, isDir }: Props) => {
  const [open, setOpen] = useState(false)
  const { execute } = useAction<z.infer<typeof AddFileSchema>, null>(addFileAction, {
    onSuccess: () => {
      toast.success("Create successfully")
    },
    onError: (error) => {
      toast.error(error)
    }
  })

  const handleAdd = (isDir: boolean) => {
    const params = {
      projectId,
      parentId,
      itemName: isDir ? 'New folder' : 'New file',
      isDir,
    }
    execute(params)
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild className={
        cn(
          open ? "opacity-100" : "opacity-0",
          className
        )}>
        <Ellipsis className="w-[1.2rem] h-[1.2rem]" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {
          isDir && (
            <>
              <DropdownMenuItem onClick={() => handleAdd(false)}>
                Add file
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleAdd(true)}>
                Add folder
              </DropdownMenuItem>
            </>
          )
        }
        <DropdownMenuItem>
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
