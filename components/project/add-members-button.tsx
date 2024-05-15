"use client"
import { Button } from "@/components/ui/button"
import { useMembersDialog } from "@/hooks/use-members-dialog"

type Props = {
  checkedList: Array<string>
}

export const AddMembersButton = ({ checkedList }: Props) => {
  const [onOpen] = useMembersDialog(s => [s.onOpen])
  return (
    <Button size="sm" onClick={() => onOpen(checkedList)}>Add members</Button>
  )
}
