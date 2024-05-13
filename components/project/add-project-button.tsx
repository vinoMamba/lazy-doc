"use client"
import { Button } from "@/components/ui/button"
import { useProjectDialog } from "@/hooks/use-project-dialog"

export const AddProjectButton = () => {
  const [onOpen] = useProjectDialog(s => [s.onOpen])
  return (
    <Button onClick={() => onOpen()}>Add project</Button>
  )
}
