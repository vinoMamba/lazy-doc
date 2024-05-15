"use client"
import { Button } from "@/components/ui/button"
import { useMembersDialog } from "@/hooks/use-members-dialog"

export const AddMembersButton = () => {
  const [onOpen] = useMembersDialog(s => [s.onOpen])
  return (
    <Button size="sm" onClick={() => onOpen()}>Add members</Button>
  )
}
