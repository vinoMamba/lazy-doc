"use client"

import { ClipboardPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useProjectDialog } from "@/hooks/use-project-dialog"

export const AddProjectButton = () => {
  const [onOpen] = useProjectDialog(s => [s.onOpen])
  return (
    <Button className="flex items-center gap-x-1" onClick={() => onOpen()}>
      <ClipboardPlus className=" w-[1.2rem] h-[1.2rem]" />
      Add project
    </Button>
  )
}
