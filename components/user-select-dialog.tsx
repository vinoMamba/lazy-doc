"use client"

import { Dialog, DialogContent, DialogHeader } from "./ui/dialog"
import { useUserSelectDialog } from "@/hooks/use-user-select-dialog"

export const UserSelectDialog = () => {
  const [isOpen, onClose] = useUserSelectDialog(s => [s.isOpen, s.onClose])
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>User select</DialogHeader>
        content
      </DialogContent>
    </Dialog>
  )
}
