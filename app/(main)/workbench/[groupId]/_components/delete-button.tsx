"use client"

import { DeleteProjectAction } from "@/actions/delete-project"
import { useAction } from "@/hooks/use-action"
import { Trash2 } from "lucide-react"
import { toast } from "sonner"

type Props = {
  projectId: string
}

export const DeleteButton = ({ projectId }: Props) => {
  const { execute } = useAction(DeleteProjectAction, {
    onSuccess: () => {
      toast.success("Deleted successfully!")
    },
    onError: (error) => {
      toast.error(error)
    }
  })
  return (
    <div
      className="flex items-center gap-x-2 cursor-pointer"
      onClick={() => execute({ projectId })}
    >
      <Trash2 className="w-[1rem] h-[1rem] text-destructive" />
      <span>Delete</span>
    </div>
  )
}
