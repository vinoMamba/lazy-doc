"use client"
import { Button } from "@/components/ui/button"
import { useMembersDialog } from "@/hooks/use-members-dialog"

type Props = {
  propjectId: string
  checkedList: Array<string>
}

export const AddMembersButton = ({ checkedList, propjectId }: Props) => {
  const [onOpen] = useMembersDialog(s => [s.onOpen])
  return (
    <Button size="sm" onClick={() => onOpen(propjectId, checkedList)}>Add members</Button>
  )
}
