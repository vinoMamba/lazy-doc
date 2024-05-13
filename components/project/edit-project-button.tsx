"use client"

import { Button } from "@/components/ui/button"
import { useEditProjectDialog } from "@/hooks/use-edit-project-dialog"
import { FC } from "react"

type Props = {
  proejctId: string
}
export const EditProjectButton: FC<Props> = ({ proejctId }) => {
  const [onOpen] = useEditProjectDialog(s => [s.onOpen])
  return (
    <Button size="sm" variant="link" onClick={() => onOpen(proejctId)}>编辑</Button>
  )
}

