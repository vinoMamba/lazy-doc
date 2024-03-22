"use client"

import { useEditProjectDialog } from "@/hooks/use-edit-project-dialog"
import { Button } from "./ui/button"

export const EditProjectButton = ({ projectId }: { projectId: string }) => {
  const [onOpen] = useEditProjectDialog(s => [s.onOpen])

  const onClick = () => {
    onOpen(projectId)
  }

  return (
    <Button size="sm" variant="link" onClick={onClick}>Edit</Button>
  )
}
