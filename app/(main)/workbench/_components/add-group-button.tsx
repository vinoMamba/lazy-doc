"use client"

import { Button } from "@/components/ui/button"
import { useGroupDialog } from "@/hooks/use-group-dialog"
import { Plus } from "lucide-react"

export const AddGroupButton = () => {
  const [onOpen] = useGroupDialog(s=>[s.onOpen])
  return (
    <Button size="icon" asChild variant="ghost" onClick={onOpen}>
      <Plus className=" w-[1.2rem] h-[1.2rem]" />
    </Button>
  )
}
