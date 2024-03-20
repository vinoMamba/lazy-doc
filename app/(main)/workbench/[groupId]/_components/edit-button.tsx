"use client";

import { useProjectDialog } from "@/hooks/use-project-dialog";
import { PencilLine } from "lucide-react"

type Props = {
  projectId: string
}


export const EditButton = ({ projectId }: Props) => {
  const [onOpen] = useProjectDialog(s => [s.onOpen])
  return (
    <div className="flex items-center gap-x-2 cursor-pointer" onClick={() => onOpen(projectId)}>
      <PencilLine className="w-[1rem] h-[1rem] " />
      <span>Edit</span>
    </div>
  )
}
