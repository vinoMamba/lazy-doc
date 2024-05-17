"use client"
import { useState } from "react"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog"
import { useAction } from "@/hooks/use-action"
import { deleteProjectAction } from "@/action/delete-project"
import { toast } from "sonner"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

type Props = {
  projectId: string
}

export const DeleteProjectButton = ({ projectId }: Props) => {
  const [open, setOpen] = useState(false)

  const { execute, isPending } = useAction<string, null>(deleteProjectAction, {
    onSuccess: () => {
      toast.success("Delete success!")
    },
    onError: (error) => {
      toast.error(error)
    }
  })


  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger>
        <span className={cn(buttonVariants({ size: 'sm', variant: 'link' }))}>Delete</span>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure you want to delete the project?</AlertDialogTitle>
          <AlertDialogDescription>
            Once deleted, the data cannot be recovered. Click the OK button to confirm deletion.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction disabled={isPending} onClick={() => execute(projectId)}>Ok</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>

  )
}
