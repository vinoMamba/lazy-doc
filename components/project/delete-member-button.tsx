"use client"

import { useAction } from "@/hooks/use-action"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog"
import { z } from "zod"
import { DeleteMembersSchema } from "@/schema/member"
import { deleteMembersAction } from "@/action/delete-members"
import { toast } from "sonner"
import { Button, buttonVariants } from "@/components/ui/button"
import { useState } from "react"
import { cn } from "@/lib/utils"

type Props = {
  projectId: string
  userId: string
  disabled: boolean
}

export const DeleteMemberButton = ({ projectId, userId, disabled }: Props) => {
  const [open, setOpen] = useState(false)
  const { execute, isPending } = useAction<z.infer<typeof DeleteMembersSchema>, null>(deleteMembersAction, {
    onSuccess: () => {
      toast.success("Delete success!")
    },
    onError: (error) => {
      toast.error(error)
    },
  })
  const handleDelete = () => {

    const params = { userList: [userId], projectId }
    execute(params)
  }
  return (
    <>
      <span
        className={cn(
          disabled ? 'cursor-not-allowed text-muted-foreground text-xs' : buttonVariants({ size: 'sm', variant: 'link' })
        )}
        onClick={() => !disabled && setOpen(true)}
      >
        Delete
      </span >
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure you want to delete the member?</AlertDialogTitle>
            <AlertDialogDescription>
              Once deleted, the data cannot be recovered. Click the OK button to confirm deletion.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction disabled={isPending} onClick={handleDelete}>Ok</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
