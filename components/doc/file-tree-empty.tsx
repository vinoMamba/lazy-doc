"use client"

import { addFileAction } from "@/action/add-file"
import { useAction } from "@/hooks/use-action"
import { AddFileSchema } from "@/schema/file"
import { PenTool } from "lucide-react"
import { toast } from "sonner"
import { z } from "zod"
import { Button } from "@/components/ui/button"

export const FileTreeEmpty = ({ projectId }: { projectId: string }) => {
  const { isPending, execute } = useAction<
    z.infer<typeof AddFileSchema>, null>(addFileAction, {
      onError(error) {
        toast.error(error)
      },
      onSuccess() {
        toast.success(`Create successfully.`)
      }
    })
  return (
    <div className=" w-full flex flex-col items-center justify-center mt-20">
      <PenTool className='w-10 h-10' />
      <p className="font-semibold">Empty list</p>
      <p className="mb-4 mt-2 text-sm text-muted-foreground">
        Click button below to add one.
      </p>
      <Button
        size="sm"
        variant="secondary"
        disabled={isPending}
        onClick={() => execute({ itemName: 'NewFolder', isDir: true, projectId })}>
        Create Folder
      </Button>
    </div>
  )
}
